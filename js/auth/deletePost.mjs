import { postsUrl } from "./constants.mjs";

export default async function deletePost(postId) {
    try {
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(`${postsUrl}/${postId}`, fetchOptions);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}