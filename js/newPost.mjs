import fetchNewPost from "./auth/fetchNewPost.mjs";
import { createPostBtn, postsUrl } from "./auth/constants.mjs";
import postValues from "./userData/postValues.mjs";
import clearMessage from "./auth/clearMessage.mjs";

createPostBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    clearMessage(createPostBtn, 'error-message');
    clearMessage(createPostBtn, 'success-message');
    const userPost = postValues();
    fetchNewPost(postsUrl, userPost);
})
