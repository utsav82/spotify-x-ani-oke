const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "c0f037a261fd4f649bc7ca1338b5a3e0";

const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;
