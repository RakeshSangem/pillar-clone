import React from "react";

export default function Subscribe() {
  return (
    <>
      <div className="bg-red flex w-full overflow-hidden rounded-xl border-2 border-white">
        <div className="w-1/2 bg-red-400">
          <img
            className="h-full object-cover"
            src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
        </div>
        <div className="w-full p-6">
          <h4 className="font-semibold">Weekly Trainings</h4>
          <p className="font-thin text-sm">
            Get the inside view of what I did for training every week! FULL
            BREAKDOWN
          </p>
          <button className="mt-6 flex items-center gap-2 rounded-lg bg-white px-6 py-3 hover:shadow-md hover:shadow-white/70">
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
            <span className="text-black">Subscribe</span>
          </button>
        </div>
      </div>
    </>
  );
}
