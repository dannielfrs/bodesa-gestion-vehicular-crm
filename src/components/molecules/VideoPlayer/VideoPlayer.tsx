import React, { useState } from 'react';
import IconVideo from '@/../public/images/icons/IconVideo.svg'
import Image from 'next/image';
import styles from './VideoPlayer.module.scss'
import IconPlay from '@/../public/images/icons/IconPlay.svg'
import IconX from '@/../public/images/icons/IconX.svg'

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
    setIsPlaying(true);
  };

  const handleVideoClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleClose = () => {
    setShowVideo(false);
    setIsPlaying(false);
  };

  return (
    <div className={styles.videoPlayer}>
      {!showVideo ? (
        <div className={styles.containerVideo}>
          <div className={styles.nameImage}>
            <Image src={IconVideo} alt=''/>
            <p className={styles.name}>Falla01.mp4</p>
          </div>
          <div className={styles.play} onClick={handlePlay}>
            <Image src={IconPlay} alt='' />
          </div>
        </div>
      ) : (
        <div className={styles.modalVideo}>
          <div className={styles.closevideo} onClick={handleClose}>
            <Image src={IconX} alt='' />
          </div>
          <video
            src={src}
            controls
            autoPlay={isPlaying}
            onClick={handleVideoClick}
            onEnded={handleVideoEnded}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
