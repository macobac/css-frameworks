//import displayPost from "../posts/displayPost.mjs";

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

        //for (let i = 0; i < json[0].title.length; i++) {
            //displayPost(json[i].title)
        //}
        
        //return json - probs here to display posts with function;
    } catch (error) {
        console.log(error);
    }
}