import React, { useState, useEffect } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  const findStoryById = (id) => stories.find((story) => story.id === id);

  const viewStoryByUser = (story) => {
    const foundStory = findStoryById(story.id);
    setSelectedProfile(getUserHandler(story.userId));
    setSelectedHistory(foundStory);
    setShowStory(!showStory);
  };

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories &&
            stories.map((story, index) => {
              const profile = getUserHandler(story.userId);

              return (
                profile !== undefined && (
                  <button
                    key={index}
                    className={`user__thumb ${
                      index === 0 ? "user__thumb--hasNew" : ""
                    }`}
                    onClick={(e) => viewStoryByUser(story)}
                  >
                    <div className="user__thumb__wrapper">
                      <img src={profile.avatar} alt={profile.name} />
                    </div>
                  </button>
                )
              );
            })}
        </div>
      </section>

      {showStory && (
        <Story
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => setShowStory(!showStory)}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
