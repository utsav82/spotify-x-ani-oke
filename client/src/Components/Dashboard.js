import { useState, useEffect } from "react";
import useAuth from "./utility/useAuth";
import Player from "./Player";
import TrackSearchResult from "./TrackSearchResult";
import { Form } from "react-bootstrap";
import "./css/Dashboard.css";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";

const spotify = new SpotifyWebApi({
  clientId: "c0f037a261fd4f649bc7ca1338b5a3e0",
});

export default function Dashboard({ code }) {
  const [{ token, searchResults }, dispatch] = useDataLayerValue();
  const accessToken = useAuth(code);
  useEffect(() => {
    if (accessToken) {
      dispatch({
        type: "SET_TOKEN",
        token: accessToken,
      });
      spotify.setAccessToken(accessToken);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, [accessToken, dispatch]);

  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");

  function chooseTrack(track) {
    setPlayingTrack(track);
    dispatch({
      type: "SET_SEARCH_RESULTS",
      searchResults: [],
    });
    setLyrics("");
  }

  // useEffect(() => {
  //   if (!playingTrack) return;

  //   axios
  //     .get("http://localhost:3001/lyrics", {
  //       params: {
  //         track: playingTrack.title,
  //         artist: playingTrack.artist,
  //       },
  //     })
  //     .then((res) => {
  //       setLyrics(res.data.lyrics);
  //     });
  // }, [playingTrack]);
  var htmlObject = document.createElement("div");
  useEffect(() => {
    if (!token) return;
    spotify.setAccessToken(token);
  }, [token]);
  useEffect(() => {
    if (!playingTrack) return;
    fetch(`http://127.0.0.1:5000/getdata/${playingTrack.title}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (text) {
        console.log("GET response text:");
        console.log(text);
        setLyrics(text);

        htmlObject.innerHTML = lyrics.ly;
      });
  }, [playingTrack]);

  return (
    <div className="main-dashboard">
      <Header spotify={spotify}></Header>
      <div className="body">
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {console.log(searchResults.length)}
        {searchResults.length === 0 && (
          <div
            className="text-center"
            style={{ whiteSpace: "pre" }}
            dangerouslySetInnerHTML={{ __html: lyrics.ly }}></div>
        )}
      </div>
      <div>
        <Player accessToken={token} trackUri={playingTrack?.uri} />
      </div>
    </div>
  );
}
