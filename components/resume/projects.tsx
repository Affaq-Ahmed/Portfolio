import React from 'react';
import { FaCode } from 'react-icons/fa6';

export default function Projects() {
  return (
    <section id='-projects' className='flex w-full flex-col'>
      <div className='relative w-full'>
        <FaCode
          aria-hidden='true'
          size={100}
          className='absolute -top-4 right-0 z-10 text-muted-foreground dark:text-muted'
        />
        <h2 className='heading group flex gap-2 uppercase'>
          Projects
          <a
            href='#-projects'
            aria-label='Permalink for this section'
            className='text-transparent opacity-0 transition-opacity duration-200 group-hover:text-muted-foreground group-hover:opacity-100 dark:group-hover:text-muted'
          >
            #
          </a>
        </h2>
      </div>

      <div className='mb-4 flex flex-col space-y-3 sm:mb-6 sm:space-y-4'>
        <p>
          <strong>Snapify - Social Media Platform</strong>
          <br />
          <a
            href='http://snapify-lac.vercel.app/'
            target='_blank'
            className='font-medium underline hover:text-muted-foreground'
          >
            snapify-lac.vercel.app
          </a>
        </p>

        <small>
          <p>
            <strong>Frontend</strong>: React, Redux, TailwindCSS, ReactQuery
          </p>
          <p>
            <strong>Deployment</strong>: Vercel, AppWrite, Github
          </p>
          <p>
            <strong>Utilities</strong>: TypeScript, Zod, Vite, RadixUI
          </p>
        </small>
      </div>

      <div className='mb-4 flex flex-col space-y-3 sm:mb-6 sm:space-y-4'>
        <p>
          <strong>20+ Freelancing Projects</strong>
          <br />
          <a
            href='http://fiverr.com/'
            target='_blank'
            className='font-medium underline hover:text-muted-foreground'
          >
            fiverr.com
          </a>
        </p>

        <small>
          I&apos;ve worked on 20+ freelance projects. Most of the work I did was
          on web development. Moreover, I&apos;ve also done some work related to
          Graphic Designing.
        </small>
      </div>

      <div className='mb-4 flex flex-col space-y-3 sm:mb-6 sm:space-y-4'>
        <p>
          <strong>Final Year Project</strong>
          <br />
          Tap&#39;N&#39;Hire
        </p>

        <small>
          Tap&#39;N&#39;Hire is an application that allows users to find and
          hire freelance tecnicians and professionals for household tasks. I
          developed the application in a group of 3 students using React Native,
          Nodejs, and ReactJs.
        </small>

        <small>
          <p>
            <strong>Frontend</strong>: React, , React Native
          </p>
          <p>
            <strong>Backend</strong>: NodeJS, ExpressJS, Firebase
          </p>
          <p>
            <strong>Deployment</strong>: Heroku, Netlify, Github
          </p>
          <p>
            <strong>Utilities</strong>: JavaScript, Git
          </p>
        </small>
      </div>

      <div className='mb-4 flex flex-col space-y-3 sm:mb-6 sm:space-y-4'>
        <p>
          <strong>University Semester Projects</strong>
          <br />
          at FAST-NU, Lahore
        </p>

        <small>
          There are some of the projects that were given as an assignment in
          different course:
        </small>

        <small>
          <ul className='list-disc space-y-2 pl-4 leading-5 sm:space-y-4'>
            <li>
              TraveLog: a complete travel logging social media web application
              using MERN stack and socket.io for real-time messaging.
            </li>
            <li>
              A complete Blog Web Application using React and Nodejs with
              MongoDB as a database.
            </li>
            <li>
              A self service kiosk sort of web app for restaurants in React,
              Node, and MongoDB. It has the feature of generating QR codes and
              ordering through restaurant Wifi. A Software Engineering course
              project.
            </li>
            <li>
              Coded a Twitter Clone in JAVA. Including user Authentication,
              SWING-GUI, and SQL Database.
            </li>
            <li>
              Coded a complete Monopoly Game using C++. Console based game using
              the core concepts of OOP.
            </li>
            <li>
              Programmed a Candy Crush Game using C++. CLI based game using
              special characters as candies.
            </li>
          </ul>
        </small>
      </div>

      <div className='flex flex-col space-y-3 sm:space-y-4'>
        <p>
          <strong>Personal Projects</strong>
          <br />
          that I did in my free time
        </p>

        <small>
          <ul className='list-disc space-y-2 pl-4 leading-5 sm:space-y-4'>
            <li>
              <strong>My Portfolio</strong> - A responsive portfolio website
              showcasing my skills and projects. Built using Next.js,
              TailwindCSS, and ShadCN. (
              <a
                href='https://github.com/Affaq-Ahmed/Portfolio'
                target='_blank'
                className='font-medium underline'
              >
                Github
              </a>{' '}
              |{' '}
              <a
                href='https://affaqahmed.vercel.app/'
                className='font-medium underline'
              >
                Website
              </a>
              )
            </li>
            <li>
              <strong>Serpent Cases</strong> - An E-Commerce platform offering a
              seamless shopping experience. Built using Next.js, ShadCN, and
              TailwindCSS. (
              <a
                href='https://github.com/Affaq-Ahmed/Serpent-Cases'
                target='_blank'
                className='font-medium underline'
              >
                Github
              </a>
              {/* {' '}
              |{' '}
              <a
                href='https://affaqahmed.vercel.app/'
                className='font-medium underline'
              >
                Website
              </a> */}
              )
            </li>
            <li>
              <strong>Budget Buddy</strong> - A user-friendly expense tracker to
              help manage finances efficiently. Built using React, Material UI,
              Context API, and Local Storage. (
              <a
                href='https://github.com/Affaq-Ahmed/Budget-Buddy'
                target='_blank'
                className='font-medium underline'
              >
                Github
              </a>{' '}
              |{' '}
              <a
                href='https://app.netlify.com/sites/affaq-budget-buddy/'
                className='font-medium underline'
              >
                Website
              </a>
              )
            </li>
            <li>
              <strong>CognoFlow</strong> - A visually appealing UI/UX
              implementation transformed from Figma. Built using ReactJS and
              advanced CSS. (
              <a
                href='https://github.com/Affaq-Ahmed/CongnoFlow-GPT-UI-UX'
                target='_blank'
                className='font-medium underline'
              >
                Github
              </a>{' '}
              |{' '}
              <a
                href='https://cognoflow.netlify.app/'
                className='font-medium underline'
              >
                Website
              </a>
              )
            </li>
            <li>
              <strong>Web Chat Vision</strong> - A robust video chat application
              for seamless real-time communication. Built using ReactJs and
              WebRTC technology. (
              <a
                href='https://github.com/Affaq-Ahmed/Web-Chat-Vision'
                target='_blank'
                className='font-medium underline'
              >
                Github
              </a>
              {/* {' '}
              |{' '}
              <a
                href='https://affaqahmed.vercel.app/'
                className='font-medium underline'
              >
                Website
              </a> */}
              )
            </li>
            <li>
              <strong>Alan AI News Reader</strong> - A news reader application
              with natural language voice commands. Built using React,
              Material-UI (MUI), and Alan AI. (
              <a
                href='https://github.com/Affaq-Ahmed/Alan-AI-News-Reader'
                target='_blank'
                className='font-medium underline'
              >
                Github
              </a>{' '}
              |{' '}
              <a
                href='https://app.netlify.com/sites/affaq-newsreader/overview'
                className='font-medium underline'
              >
                Website
              </a>
              )
            </li>
          </ul>
        </small>
      </div>
    </section>
  );
}
