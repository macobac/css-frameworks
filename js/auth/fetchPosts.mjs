import displayPost from "../posts/displayPost.mjs";
/**
 * 
 * @param {string} url 
 * @param {number} limit 
 * @param {number} offset 
 * @param {string} sort 
 * @param {string} sortOrder 
 */
export default async function fetchPosts(url, limit, offset, sort, sortOrder) {
    try {
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(`${url}?limit=${limit}&offset=${offset}&_author=true&sort=${sort}&sortOrder=${sortOrder}`, fetchOptions);
        const json = await response.json();
        for (let i = 0; i < json.length; i++) {
            displayPost(json[i])
        }
    } catch (error) {
        console.log(error);
    }
}