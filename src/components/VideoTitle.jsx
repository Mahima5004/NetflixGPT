import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="absolute z-10 flex items-center">
      <div className="pl-30 pt-32 text-white bg-gradient-to-r from-black via-black/60 to-transparent w-screen aspect-video">
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>

        <p className="w-1/2 text-lg mb-6">
          {overview}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 text-lg rounded-md font-semibold hover:bg-opacity-80">
            ▶ Play
          </button>

          <button className="bg-gray-500 bg-opacity-60 text-white px-8 py-3 text-lg rounded-md font-semibold hover:bg-opacity-40">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
