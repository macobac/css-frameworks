import errorMessage from "../auth/errorMessage.mjs";
import successMessage from "../auth/successMessage.mjs";
import { regBtn } from "../auth/constants.mjs";
import { regSuccessMessage } from "../auth/constants.mjs";
import { genericErrorMessage } from "../auth/constants.mjs";

/**
 * API call that registers user
 * @param {string} url 
 * @param {any} userData
 * ```js
 * registerUser(registerUrl, userToReg);
 * ``` 
 */
export default async function registerUser(url, userData) {
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
            successMessage(regBtn, regSuccessMessage);
            return true;
        } else {
            const json = await response.json();
            const apiErrorMessage = json.errors[0].message;
            const outputErrorMessage = `Error: ${apiErrorMessage}`
            errorMessage(regBtn, outputErrorMessage);
            return false;
        }
    } catch (error) {
        console.log(error);
        errorMessage(regBtn, genericErrorMessage);
        return false;
    }
};
