import displayPost from "../posts/displayPost.mjs";

export default async function fetchPosts(url) {
    try {
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);

        //displayPost(json)
        //return json - probs here to display posts with function;
    } catch (error) {
        console.log(error);
    }
}