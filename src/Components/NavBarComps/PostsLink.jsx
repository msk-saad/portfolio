import React from 'react';
import { Link } from 'react-router-dom';

const PostsLink = () => {
  return (
    <Link
      className="relative flex items-center gap-2 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base"
      href="../PostsComps/Posts.jsx"
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
        className="lucide lucide-book-text"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
        <path d="M8 11h8"></path>
        <path d="M8 7h6"></path>
      </svg>
      Posts
    </Link>
  );
};

export default PostsLink;
