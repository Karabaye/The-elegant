import React, { useState } from "react";

import Event1 from "../assets/Videos/El1.mp4";
import Event2 from "../assets/Videos/El2.mp4";
import Event3 from "../assets/Videos/El3.mp4";
import Event4 from "../assets/Videos/El4.mp4";
import Event5 from "../assets/Videos/El5.mp4";
import Event6 from "../assets/Videos/El6.mp4";

const videos = [
  { src: Event1 },
  { src: Event2 },
  { src: Event3 },
  { src: Event4 },
  { src: Event5 },
  { src: Event6 },
];

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 uppercase">Our Best Memories with our clients Videos </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-5xl flex flex-wrap gap-8 justify-center">
            {videos.map((video, index) => (
              <button key={index} onClick={() => setSelectedVideo(video.src)} className="w-80 h-48 overflow-hidden">
                <video className="w-full h-full object-cover rounded-lg">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedVideo && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
          <button onClick={() => setSelectedVideo(null)} className="absolute top-5 right-5 text-white text-3xl">&times;</button>
          <video controls autoPlay className="w-[80vw] h-auto max-h-[80vh] rounded-lg">
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideosPage;