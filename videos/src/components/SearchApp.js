import React from "react";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { useVideos } from "../utilities/useVideos";

export const SearchApp = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("Alps");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const onVideoSelect = (video) => {
    selectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
