import errorMessage from "../auth/errorMessage.mjs";
import { regBtn } from "../auth/constants.mjs";
import { formEl } from "../auth/constants.mjs";

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
            // what do i wanna do here
            // when successfully registered, green ("error") message display registration successful, you can now go to login pg
            // needs to NOT reset error message but form input for when reg successful
            //finish for if successfull - error part below
            // if registration not successful, red ("error") message display the error code and error message(error message needs to be hardcoded if im not wrong, just do the most common ones and then one for "if error message anything else than "xxx", print this: "contact /help blabla")
            // needs to "reset" error message but not form input for when error wrong

            //maybe put "ok" code first and then error
            //apiErrorMessage needs to be another place, else error in console
            const apiErrorMessage = json.errors[0].message;
            const apiMessageId = json.id;
            //if there is a apiErrorMessage, then run code below
            if (apiErrorMessage) {
                const outputErrorMessage = `Error: ${apiErrorMessage}`
                errorMessage(regBtn, outputErrorMessage);
            } else if (apiMessageId)

            {
      
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



