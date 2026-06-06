import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const rootDirectory = path.join(process.cwd(), 'content', 'projects');

export type Project = {
  metadata: ProjectMetadata;
  content: string;
};

export type ProjectMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  // Recruiter / SEO oriented fields — all optional so projects degrade
  // gracefully when a live demo, repo, or metrics aren't available.
  role?: string;
  stack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
  // Context of the work: 'Professional' | 'Client' | 'Personal' | 'Open Source'
  type?: string;
  // Company/agency the work was done at (for professional/client projects)
  company?: string;
  slug: string;
};

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug }, content };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory);

  const projects = files
    .map((file) => getProjectMetadata(file))
    .sort((a, b) => {
      // Featured projects float to the top, then most-recent first.
      if (Boolean(a.featured) !== Boolean(b.featured)) {
        return a.featured ? -1 : 1;
      }
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return projects.slice(0, limit);
  }

  return projects;
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const { data } = matter(fileContent);
  return { ...data, slug };
}
