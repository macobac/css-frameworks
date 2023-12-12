
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
        console.log(response);
        if (response.ok) {
            // Clear input fields after successful post
            inputTitle.value = '';
            inputBody.value = '';
            inputMedia.value = '';

            // Redirect to the feed page
            window.location.href = '/feed.html';
        } else {
            console.error('Failed to create post:', response.statusText);
        }

    } catch (error) {
        console.log(error);
    }
}