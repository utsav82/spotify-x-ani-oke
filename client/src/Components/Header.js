import React from "react";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./css/Header.css";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import { useDataLayerValue } from "./DataLayer";
const logo = require("./assets/logo_1.png");

function Header({ spotify }) {
  const [{ token, user }, dispatch] = useDataLayerValue();
  const [search, setSearch] = useState("");
  const [_searchResults, set_SearchResults] = useState([]);

  useEffect(() => {
    if (!search) return set_SearchResults([]);
    if (!token) return;

    let cancel = false;
    spotify.searchTracks(search).then((res) => {
      if (cancel) return;
      set_SearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
      dispatch({
        type: "SET_SEARCH_RESULTS",
        searchResults: _searchResults,
      });
    });

    return () => (cancel = true);
  }, [token, search, dispatch, spotify]);

  return (
    <div className="header">
      <div className="header-left">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div className="header-center">
        <Form.Control
          className="search"
          type="search"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="header-right">
        <div className="user-info">
          <Avatar
            alt={user?.body?.display_name}
            src={user?.body?.images[0]}></Avatar>
          <h4>{user?.body?.display_name}</h4>
        </div>
        <div className="nav-btn">
          <MenuIcon fontSize="large"></MenuIcon>
        </div>
      </div>
    </div>
  );
}

export default Header;
