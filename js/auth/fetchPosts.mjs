import displayPost from "../posts/displayPost.mjs";

export default async function fetchPosts(url, limit, offset) {
    try {
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(`${url}?limit=${limit}&offset=${offset}&_author=true`, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);

        for (let i = 0; i < json.length; i++) {
            displayPost(json[i])
        }


    } catch (error) {
        console.log(error);
    }
}