import { submitUpdateBtn, inputUpdateBody, inputUpdateMedia, inputUpdateTitle } from "../auth/constants.mjs";
import fetchUpdatePost from "../auth/fetchUpdatePost.mjs";

export default async function displayUpdatePost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const updTitle = urlParams.get('title');
    const updBody = urlParams.get('body');
    const updMedia = urlParams.get('media');

    inputUpdateTitle.value = updTitle;
    inputUpdateBody.value = updBody;
    inputUpdateMedia.value = updMedia;

    submitUpdateBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const userData = {
            title: inputUpdateTitle.value,
            body: inputUpdateBody.value,
            media: inputUpdateMedia.value
        }

        await fetchUpdatePost(postId, userData);
        window.location.href = `singlePost.html?id=${postId}`;
    });
}

