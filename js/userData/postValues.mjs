import { inputTitle, inputBody, inputMedia } from "../auth/constants.mjs";

export default function postValues() {
    const newPost = {
        title: inputTitle.value,
        body: inputBody.value,
        media: inputMedia.value
    };
    return newPost;
}