import React from "react";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center gap-1 text-center">
      <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-white">
        <img
          src="https://pbs.twimg.com/profile_images/1587160193158500353/P3gQhoHU_400x400.jpg"
          alt=""
        />  
      </div>
      <h1 className="text-lg font-semibold">Rakesh Sangem</h1>
      <p className="text-sm font-thin">Frontend Developer + Designer</p>
      <p className="flex items-center justify-center gap-1 text-sm font-thin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path
            fill=""
            d="M128.1 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80Zm0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"
            opacity=".2"
          />
          <path
            fill="white"
            d="M128.1 64a40 40 0 1 0 40 40a40.1 40.1 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24.1 24.1 0 0 1-24 24Z"
          />
          <path
            fill="white"
            d="M128.1 16a88.1 88.1 0 0 0-88 88c0 31.4 14.5 64.7 42 96.2a259.4 259.4 0 0 0 41.4 38.4a8.3 8.3 0 0 0 9.2 0a257.6 257.6 0 0 0 41.5-38.4c27.4-31.5 41.9-64.8 41.9-96.2a88.1 88.1 0 0 0-88-88Zm0 206c-16.5-13-72-60.8-72-118a72 72 0 0 1 144 0c0 57.2-55.5 105-72 118Z"
          />
        </svg>
        Hyderabad, India
      </p>
    </div>
  );
}
