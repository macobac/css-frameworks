import { postsUrl } from "./constants.mjs";

export default async function fetchNewPost() {
    try {
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(`${postsUrl}`, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);

      

    } catch (error) {
        console.log(error);
    }
}