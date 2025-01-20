import React from 'react';
import { FaBriefcase } from 'react-icons/fa6';

export default function Experience() {
  return (
    <section id='-experience' className='flex w-full flex-col'>
      <div className='relative w-full'>
        <FaBriefcase
          aria-hidden='true'
          size={100}
          className='absolute -top-4 right-0 z-10 text-muted-foreground dark:text-muted'
        />
        <h2 className='heading group flex gap-2 uppercase'>
          Experience
          <a
            href='#-experience'
            aria-label='Permalink for this section'
            className='text-transparent opacity-0 transition-opacity duration-200 group-hover:text-muted-foreground group-hover:opacity-100 dark:group-hover:text-muted'
          >
            #
          </a>
        </h2>
      </div>

      <div className='flex flex-col space-y-4 sm:space-y-5'>
        <p>
          <strong>Full Stack Developer</strong>
          <br />
          ZySoftec
          <br />
          <small>May 2024 - present</small>
          &nbsp; | &nbsp;
          <small>Islamabad Pakistan (Remote)</small>
        </p>

        <small>
          <ul className='my-1 list-disc space-y-2 pl-4 sm:pl-6'>
            <li>
              Led full-stack development of 5+ MERN projects, managing frontend
              design, UI/UX, database architecture, and API integration.
              Delivered end-to-end deployments on AWS (EC2, Amplify).
            </li>
            <li>
              Re-implemented application logic to transition from Firebase to
              MongoDB, redesigned features, and handled full Stripe integration
              for package-based checkout, improving payment processing
              efficiency.
            </li>
            <li>
              Spearheaded load time optimization for a Next.js project with a
              Node.js backend, achieving a 30% performance improvement through
              code refactoring and enhanced caching strategies.
            </li>
            <li>
              Designed and implemented real-time chat systems for two projects
              using Next.js, Node.js, and Socket.io, leading architecture and
              database schema design in MongoDB, ensuring seamless real-time
              communication.
            </li>
            <li>
              Architected and developed the MVP for an EdTech platform, working
              closely with the client to create the system from scratch,
              including schema design, API development, and socket
              communication. Later served as Lead Backend Engineer, supporting
              React Native development and leading admin panel design in
              React.js.
            </li>
            <li>
              As a Support Lead, diagnosed and fixed issues in a collaborative
              editor environment that integrated multiple OpenAI models, leading
              to smooth collaboration and error resolution.
            </li>
            <li>
              Resolved over 100 bugs per project during support phases, working
              directly with clients to enhance system reliability, while
              managing server deployments and scaling on AWS.
            </li>
          </ul>

          <p className='my-4'>
            <strong>Languages</strong>: JavaScript/TypeScript <br />
            <strong>Frameworks/Tools</strong>: React.js, Node.js, Next.js AWS,
            TailwindCSS, MongoDB, Firebase, Socket.io, Vercel, Github, Git
          </p>
        </small>
      </div>

      <div className='flex flex-col space-y-4 sm:space-y-5'>
        <p>
          <strong>Full Stack Software Engineer</strong>
          <br />
          Tintash
          <br />
          <small>July 2022 - April 2024</small>
          &nbsp; | &nbsp;
          <small>Lahore, Pakistan (Remote)</small>
        </p>

        <small>
          <ul className='my-1 list-disc space-y-2 pl-4 sm:pl-6'>
            <li>
              Spearheaded end-to-end project delivery in React.js frontend
              development, demonstrating proficiency in design, integration, and
              pipeline setup.
            </li>
            <li>
              Re-implemented application logic to transition from Firebase to
              MongoDB, redesigned features, and handled full Stripe integration
              for package-based checkout, improving payment processing
              efficiency.
            </li>
            <li>
              Led the development and implementation of CI/CD pipelines for a
              React project, facilitating deployment on AWS through Bitbucket.
            </li>
            <li>
              Contributed to an internal company project and demonstrated
              proficiency in delivering projects with Nest.js/Node.js
              technology.
            </li>
            <li>
              Revamped a NestJs application by making several portions dynamic
              and writing seeders to enhance data initialization and management.
            </li>
            <li>
              Showcased architectural expertise by independently designing AWS
              infrastructure for projects.
            </li>
            <li>
              Wrote unit test cases for the backend of a project in NestJs to
              ensure code quality and reliability.
            </li>
            <li>
              Led a cross-functional team to optimize performance, resulting in
              a 30% increase in application efficiency.
            </li>
            <li>
              Developed and implemented batch scripts to optimize the build
              process, resulting in a savings of over 200 company hours in build
              creation.
            </li>
            <li>
              Designed the architecture for an application to scrape data for a
              Large Language Model (LLM) and implemented the code for it.
            </li>
          </ul>

          <p className='my-4'>
            <strong>Languages</strong>: JavaScript/TypeScript <br />
            <strong>Frameworks/Tools</strong>: React.js, Node.js, Next.js,
            Nest.js, AWS, TailwindCSS, MongoDB, Bitbucket, Github, Git
          </p>
        </small>
      </div>

      <div className='flex flex-col space-y-4 sm:space-y-5'>
        <p>
          <strong>iOS Developer Intern (Summers)</strong>
          <br />
          Taps&#39;N&#39;Clicks
          <br />
          <small>March 2021 - August 2021</small>
          &nbsp; | &nbsp;
          <small>Lahore, Pakistan</small>
        </p>

        <small>
          <ul className='my-1 list-disc space-y-2 pl-4 sm:pl-6'>
            <li>
              Developed iOS applications using Swift, delivering robust and
              user-friendly interfaces.
            </li>
            <li>
              Integrated Backendless API in one app and Alamofire API in another
              for comprehensive full-stack implementations.
            </li>
          </ul>
        </small>
      </div>
    </section>
  );
}
