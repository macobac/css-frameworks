import fetchPosts from "./auth/fetchPosts.mjs";
import { postsUrl, fetchBtn, latestPosts, oldestPosts, fetchedDiv } from "./auth/constants.mjs";
import redirectToNewPost from "./posts/redirectToNewPost.mjs";

let postLimit = 5;
let postOffset = 0;
let sort = 'created';
let sortOrder = 'desc';

//something weird going on with sorting and button and sorting again
redirectToNewPost();

if (window.location.pathname !== '/newPost.html') {
    fetchPosts(postsUrl, postLimit, postOffset, sort, sortOrder);

fetchBtn.addEventListener('click', () => {
    postOffset += postLimit;
    fetchPosts(postsUrl, postLimit, postOffset, sort, sortOrder);
});

latestPosts.addEventListener('click', () => {
    sortOrder = 'desc';
    fetchedDiv.innerHTML = '';
    fetchPosts(postsUrl, postLimit, postOffset, sort, sortOrder);
});

oldestPosts.addEventListener('click', () => {
    sortOrder = 'asc';
    fetchedDiv.innerHTML = '';
    fetchPosts(postsUrl, postLimit, postOffset, sort, sortOrder);
});

}

