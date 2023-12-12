import { newPostBtn } from "../auth/constants.mjs";

export default function redirectToNewPost() {
    newPostBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        window.location.href = "/newPost.html";
    });
}
