import { postsUrl } from "./constants.mjs";

export default async function fetchUpdatePost(postId, userData) {
    try {
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(`${postsUrl}/${postId}`, fetchOptions);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}