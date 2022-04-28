import React from "react";
import "./css/TrackSearchResult.css";
export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      className="searchResultOption"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}>
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px" }}
        alt="album-img"
      />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
}
