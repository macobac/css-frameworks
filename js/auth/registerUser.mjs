import errorMessage from "../auth/errorMessage.mjs";
import { regBtn } from "../auth/constants.mjs";

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
        if (response) {
            const json = await response.json();
            //put api response actions in here


            //maybe put "ok" code first and then error
            //apiErrorMessage needs to be another place, else error in console
            const apiErrorMessage = json.errors[0].message;
            const apiMessageId = json.id;
            //if there is a apiErrorMessage, then run code below
            if (apiErrorMessage) {
                const outputErrorMessage = `Error: ${apiErrorMessage}`
                errorMessage(regBtn, outputErrorMessage);
            } else if (apiMessageId)
            //if there is no apiErrorMessage, then go to different window
            {
                const formEl = document.querySelector("#regform");
                if (formEl) {
                    const attribute = formEl.getAttribute("action");
                    if (attribute) {
                        window.location.href = attribute;
                    } else {
                        console.log("Form element doesn't have an 'action' attribute.");
                    }
                } else {
                    console.log("Form element not found.");
                }
            } else {
                console.log("help")
            }

        } else {
            console.log("Failed to register the user. Status code: " + response.status);
        }
    } catch (error) {
        console.log(error);
    }
}



