import React from 'react';
import { Link } from 'react-router-dom'

const HomeLink = () => {
  return (
    <>

    <Link
      className="relative flex items-center gap-2 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base"
      href="../IntroComps/Home.jsx"
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
        className="lucide lucide-house"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
      Home
      <span className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>
    </Link>
    </>
  );
};

export default HomeLink;
