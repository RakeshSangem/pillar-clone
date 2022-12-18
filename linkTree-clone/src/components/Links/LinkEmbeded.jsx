import React, { useState } from "react";

export default function Link() {
  const [isOpen, setIsOpen] = useState(false);

  function collapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full">
      <button
        className="flex w-full flex-col items-center justify-between rounded-xl border-2 border-white py-4 px-6 text-center"
        onClick={collapse}
      >
        <div className="flex w-full items-center justify-between">
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
            <h4 className="font-semibold">Workout Vlog with Batman!</h4>
          </div>
          <div className={isOpen ? "duration-400 rotate-180" : "duration-400"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 14.975q-.2 0-.387-.075q-.188-.075-.313-.2l-4.6-4.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-4.6 4.6q-.15.15-.325.212q-.175.063-.375.063Z"
              />
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 w-full">
            <iframe
              data-v-133dc632=""
              src="https://www.youtube.com/embed/bmJFOy5Y0FU?mute=0&amp;autoplay=0"
              allowfullscreen="allowfullscreen"
              allow="autoplay; fullscreen; picture-in-picture"
              className="h-64 w-full"
            ></iframe>
          </div>
        )}
      </button>
    </div>
  );
}
