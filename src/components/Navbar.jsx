import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-4 z-50 mx-auto flex max-w-3xl items-center justify-between pt-4 md:px-6">
      <div className="grid place-items-center rounded-full bg-white p-2.5">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M18 8h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v11H6V10h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"
            />
            <path
              fill="black"
              d="M12 16c.55 0 1-.45 1-1V5h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0L8.85 4.15a.5.5 0 0 0 .36.85H11v10c0 .55.45 1 1 1z"
            />
          </svg>
        </button>
      </div>
      <div>
        <button className="flex items-center gap-2 rounded-full bg-white px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="#2a4ffe"
              d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
            />
          </svg>
          <span className="text-black/90">Subscribe</span>
        </button>
      </div>
    </nav>
  );
}
