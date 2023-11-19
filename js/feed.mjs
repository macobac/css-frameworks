import fetchPosts from "./auth/fetchPosts.mjs";
import { postsUrl, fetchBtn } from "./auth/constants.mjs";

let postLimit = 5;
let postOffset = 0;

fetchPosts(postsUrl, postLimit, postOffset);


fetchBtn.addEventListener('click', () => {
    postOffset += postLimit;
    fetchPosts(postsUrl, postLimit, postOffset);
});