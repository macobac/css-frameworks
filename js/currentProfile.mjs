import fetchProfileData from "./auth/fetchProfile.mjs";
import redirectToNewPost from "./posts/redirectToNewPost.mjs";
import logout from "./auth/logout.mjs";

const currentUser = localStorage.getItem('currentUserName');

redirectToNewPost();

if (window.location.pathname !== '/newPost.html') { 
    logout();
    fetchProfileData(currentUser);
}
