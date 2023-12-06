import fetchProfileData from "./auth/fetchProfile.mjs";

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("name");

fetchProfileData(userId);