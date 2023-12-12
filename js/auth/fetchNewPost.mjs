/**
 * 
 * @param {string} url 
 * @param {any} userData 
 */
export default async function fetchNewPost(url, userData) {
    try {
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, fetchOptions);
        if (response.ok) {
            inputTitle.value = '';
            inputBody.value = '';
            inputMedia.value = '';
            window.location.href = '/feed.html';
        } else {
            //fix this so that error is in dom
            console.error('Failed to create post:', response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}