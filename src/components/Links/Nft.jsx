import React from "react";

export default function Nft() {
  return (
    <>
      <div className="bg-red flex w-full overflow-hidden rounded-xl border-2 border-white">
        <div className="w-1/2 bg-red-400">
          <img
            className="h-full object-cover"
            src="https://athlane-file-management-prod.s3.amazonaws.com/1a42996f-3ad8-4d67-b0a1-f0a63a47bac4"
            alt=""
          />
        </div>
        <div className="w-full p-6">
          <h4 className="font-semibold">J Johnson Jr on the moon</h4>
          <p className="text-sm font-thin">
            Buy a collectible 1 of 1 NFT designed by me!
          </p>
          <button className="mt-6 flex items-center gap-2 rounded-lg bg-white px-6 py-3 hover:shadow-md hover:shadow-white/70">
            <span className="text-black">Buy for $777</span>
            <svg
              width="1.2em"
              height="1.2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
