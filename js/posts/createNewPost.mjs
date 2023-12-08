import { newPostBtn } from "../auth/constants.mjs";

newPostBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    window.location.href(`/newPost.html`)
});