import fetchNewPost from "./auth/fetchNewPost.mjs";
import { createPostBtn, postsUrl } from "./auth/constants.mjs";
import postValues from "./userData/postValues.mjs";

createPostBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const userPost = postValues();
    fetchNewPost(postsUrl, userPost);
})