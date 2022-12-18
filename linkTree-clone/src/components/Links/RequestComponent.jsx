import React from "react";

function RequestComponent() {
  return (
    <div className="w-full rounded-xl border-2 border-white p-6">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex items-center py-2">
          <div className="px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 26 26"
            >
              <path
                fill="currentColor"
                d="M10 0C4.547 0 0 3.75 0 8.5c0 2.43 1.33 4.548 3.219 6.094a4.778 4.778 0 0 1-.969 2.25a14.4 14.4 0 0 1-.656.781a2.507 2.507 0 0 0-.313.406c-.057.093-.146.197-.187.407c-.042.209.015.553.187.812l.125.219l.25.125c.875.437 1.82.36 2.688.125c.867-.236 1.701-.64 2.5-1.063c.798-.422 1.557-.864 2.156-1.187c.084-.045.138-.056.219-.094C10.796 19.543 13.684 21 16.906 21c.031.004.06 0 .094 0c1.3 0 5.5 4.294 8 2.594c.1-.399-2.198-1.4-2.313-4.375c1.957-1.383 3.22-3.44 3.22-5.719c0-3.372-2.676-6.158-6.25-7.156C18.526 2.664 14.594 0 10 0zm0 2c4.547 0 8 3.05 8 6.5S14.547 15 10 15c-.812 0-1.278.332-1.938.688c-.66.355-1.417.796-2.156 1.187c-.64.338-1.25.598-1.812.781c.547-.79 1.118-1.829 1.218-3.281l.032-.563l-.469-.343C3.093 12.22 2 10.423 2 8.5C2 5.05 5.453 2 10 2z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold">Link on Pillar</h4>
            <p className="text-sm font-thin">
              Have you link on my Pillar page. I have 15k+ visits
            </p>
            <span className="py-2 font-semibold">$15</span>
          </div>
        </div>
        <div className="mt-2 grid place-items-center md:my-auto">
          <button className="w-full rounded-lg bg-white px-6 py-3 text-black hover:shadow-md hover:shadow-white/70 md:w-auto">
            Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default RequestComponent;
