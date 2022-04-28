import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import "./css/Player.css";
export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;
  return (
    <div className="player-container">
      <SpotifyPlayer
        styles={{
          activeColor: "#fff",
          altColor: "#fff",
          bgColor: "transparent",
          color: "#fff",
          errorColor: "red",
          height: "60px",
          loaderColor: "#eee",
          loaderSize: "60px",
          sliderColor: "#730099",
          sliderHandleColor: "#eee",
          sliderTrackBorderRadius: "99px",
          sliderTrackColor: "#c87dff",
          trackArtistColor: "#8c8c8c",
          trackNameColor: "#fff",
        }}
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        magnifySliderOnHover
        syncExternalDevice={true}
        play={play}
        uris={trackUri ? [trackUri] : []}
      />
    </div>
  );
}
