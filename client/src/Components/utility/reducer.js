// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  // token:
  // "BQALxcIcbohg656Z0Oac2bBQ1QMTqDQvFGYLg6Dce_hu1oFpyeiv6_tMQWYdLxPf4U9HfRoQMFJDjMfyBqt_k-XeEiI-2QEUwpYbw5mg6LsaAQ8uniSjTzDnBKHKKHIk51Xo78meblM_LPsJDUoNUw_VFff7ax3uLWXPQ1sQOPMZ2ZU5X3HMqelffNH9qTaKT9IqSzgxv2AT3cR6a9Hks3Ltnw",
  token: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  searchResults: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.searchResults,
      };

    default:
      return state;
  }
};

export default reducer;
