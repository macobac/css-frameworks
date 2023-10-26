import errorMessage from "./errorMessage.mjs";

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
            const regBtn = document.querySelector(".regbtn");
            const apiMessage = json.errors[0].message;
            const outputMessage = `Error: ${apiMessage}`
            errorMessage(regBtn, outputMessage);
            //if there is no apimessage, then go to different window
            const formEl = document.querySelector("#regform");
            if (formEl) {
                const attribute = formEl.getAttribute("action");
                if (attribute) {
                    //window.location.href = attribute;
                } else {
                    console.log("Form element doesn't have an 'action' attribute.");
                }
            } else {
                console.log("Form element not found.");
            }
        } else {
            console.log("Failed to register the user. Status code: " + response.status);
        }
    } catch (error) {
        console.log(error);
    }
}



