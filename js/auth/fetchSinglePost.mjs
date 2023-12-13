import { postsUrl } from "./constants.mjs";
import displaySinglePost from "../posts/displaySinglePost.mjs";

export default async function fetchSinglePost(postId) {
    try {
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(`${postsUrl}/${postId}?_author=true`, fetchOptions);
        const json = await response.json();
        displaySinglePost(json);
    } catch (error) {
        console.log(error);
    }
}