import errorMessage from "../auth/errorMessage.mjs";
import { loginBtn, genericErrorMessage } from "../auth/constants.mjs";

/**
 * API call that logs in user
 * @param {string} url 
 * @param {object} userData 
 * ```js
 * loginUser(loginUrl, userToLogin);
 * ``` 
 */
export default async function loginUser(url, userData) {
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        if (response.ok) {
            const json = await response.json();
            const accessToken = json.accessToken;
            localStorage.setItem('accessToken', accessToken);
            const currentUserName = json.name;
            localStorage.setItem('currentUserName', currentUserName);
            window.location.replace(`/feed.html`);
            return true;
        } else {
            const json = await response.json();
            const apiErrorMessage = json.errors[0].message;
            const outputErrorMessage = `Error: ${apiErrorMessage}`
            errorMessage(loginBtn, outputErrorMessage);
            return false;
        }
    } catch (error) {
        console.log(error);
        errorMessage(loginBtn, genericErrorMessage);
        return false;
    }
}