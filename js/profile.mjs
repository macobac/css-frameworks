import fetchProfileData from "./auth/fetchProfile.mjs";
import logout from "./auth/logout.mjs";
import redirectToNewPost from "./posts/redirectToNewPost.mjs";

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("name");

redirectToNewPost();

if (window.location.pathname !== '/newPost.html') { 
    logout();
    fetchProfileData(userId);
}
