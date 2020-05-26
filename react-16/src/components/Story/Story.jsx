import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";

import "./Story.scss";

const Story = ({ story, user, handleClose }) => {
  const [metadata, setMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const { name, avatar } = user;
  const { videoUrl } = story;

  const updateProgress = useCallback(() => {
    if (metadata?.duration !== null && currentTime !== null) {
      const elapsedTime = (currentTime / metadata.duration) * 100;

      return `${elapsedTime.toFixed(2)}%`;
    }

    return "0%";
  }, [metadata, currentTime]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <a className="user__thumb" href="/">
              <img src={avatar} alt={name} />
            </a>
            <a className="user__name" href="/">
              {name}
            </a>
          </div>

          <button className="story__close" onClick={(e) => handleClose()}>
            <i className="fas fa-times" />
          </button>
        </header>
        <div className="story__progress">
          <div
            className="story__progress__elapsed"
            style={{ width: updateProgress() }}
          ></div>
        </div>
      </div>
      <div className="container">
        <section className="story__video__wrapper">
          <video
            autoPlay={true}
            className="video-player"
            loop={true}
            playsInline={true}
            src={videoUrl}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onLoadedMetadata={(e) => {
              setMetadata({
                videoHeight: e.target.videoHeight,
                videoWidth: e.target.videoWidth,
                duration: e.target.duration,
              });
            }}
          ></video>
        </section>
      </div>
    </section>
  );
};

export default Story;
