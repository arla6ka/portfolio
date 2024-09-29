'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Video {
  id: number;
  src: string;
}

const InteractiveVideoSquares: React.FC = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const videos: Video[] = [
    { id: 1, src: "./1.mp4" },
    { id: 2, src: "./6.mp4" },
    { id: 3, src: "./3.mp4" },
    { id: 4, src: "./4.mp4" },
    { id: 5, src: "./2.mp4" },
    { id: 6, src: "./7.mp4" },
  ];

  return (
    <section className="">
      <h2 className="lg:text-4xl mt-[-20px] sm:text-4xl font-bold text-center mb-12 tracking-tighter">Also, my motion designs</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            style={{
              width: '100%',
              paddingBottom: '125%', // 1080:1350 aspect ratio
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 15,
              z: 50,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
            onHoverStart={() => setHoveredVideo(video.id)}
            onHoverEnd={() => setHoveredVideo(null)}
          >
            <video
              src={video.src}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay={hoveredVideo === video.id}
              onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
              onMouseLeave={(e) => {
                const videoElement = e.target as HTMLVideoElement;
                videoElement.pause();
                videoElement.currentTime = 0;
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveVideoSquares;