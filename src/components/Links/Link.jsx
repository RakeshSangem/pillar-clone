import React from "react";

export default function Link() {
  return (
    <div className="w-full">
      <a
        className="flex  w-full items-center justify-between rounded-xl border-2 border-white py-3 px-6 text-center duration-150 ease-in hover:scale-[1.01]"
        href=""
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold">Speed Training Playlist</h4>
          <p className="text-sm font-light">
            Get faster for any sport with these speed tips
          </p>
        </div>
        <div></div>
      </a>
    </div>
  );
}
