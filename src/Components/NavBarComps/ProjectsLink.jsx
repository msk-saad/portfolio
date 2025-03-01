import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsLink = () => {
  return (
    <Link
      className="relative flex items-center gap-2 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base"
      href="../ProjectsComps/Projects.jsx"
      target="_self"
      data-astro-prefetch="load"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-folder"
      >
        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
      </svg>
      Projects
    </Link>
  );
};

export default ProjectsLink;
