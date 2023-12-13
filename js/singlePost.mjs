import logout from "./auth/logout.mjs";
import redirectToNewPost from "./posts/redirectToNewPost.mjs";
import fetchSinglePost from "./auth/fetchSinglePost.mjs";

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

redirectToNewPost();

if (window.location.pathname !== '/newPost.html') { 
    logout();
    fetchSinglePost(postId);
}
