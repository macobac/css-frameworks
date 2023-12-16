import { createPostBtn, postSuccessMessage, genericErrorMessage, appendBtnDiv } from "./constants.mjs";
import successMessage from "./successMessage.mjs";
import errorMessage from "./errorMessage.mjs";
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
            successMessage(createPostBtn, postSuccessMessage);
            const redirectBtn = document.createElement('button');
            redirectBtn.innerText = `Go to my profile`;
            redirectBtn.classList.add("btn", "btn-primary");
            appendBtnDiv.appendChild(redirectBtn);
            redirectBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = `currentProfile.html`;
            })
        } else {
            const json = await response.json();
            const apiErrorMessage = json.errors[0].message;
            const outputErrorMessage = `Error: ${apiErrorMessage}`
            errorMessage(createPostBtn, outputErrorMessage);
            console.error('Failed to create post:', response.statusText);
            return false;
        }
    } catch (error) {
        console.log(error);
        errorMessage(createPostBtn, genericErrorMessage);
        return false;
    }
}