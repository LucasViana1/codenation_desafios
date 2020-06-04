import { config } from "../config";

const {
  authorizationURL,
  clientId,
  scopes,
  redirectUrl,
  webAPI,
} = config.spotify;

const options = {
  Accept: "application/json",
  "Content-Type": "application/json",
  method: "GET",
};

export const endpoints = {
  getAuthorization: {
    url: `${authorizationURL}?client_id=${clientId}${
      scopes ? "&scope=" + encodeURIComponent(scopes) : ""
    }&redirect_uri=${encodeURIComponent(
      redirectUrl
    )}&response_type=token&show_dialog=true`,

    options: {
      method: "GET",
    },
  },
  getCategories: {
    url: `${webAPI}/browse/categories?country=BR&locale=pt_BR`,
    options,
  },
  getCategoryPlaylists: {
    url: `${webAPI}/browse/categories/{categoryId}/playlists`,
    options,
  },
  getPlaylistTracks: {
    url: `${webAPI}/playlists/{playlistId}/tracks`,
    options,
  },
  getUserProfile: {
    url: `${webAPI}/me`,
    options,
  },
};
