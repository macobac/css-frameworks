import errorMessage from "../auth/errorMessage.mjs";
import successMessage from "../auth/successMessage.mjs";
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
        if (response.ok) {
            const outputSuccessMessage = `Your registration was successful, you can now log in.`;
            successMessage(regBtn, outputSuccessMessage);
            return true;
        } else {
            const json = await response.json();
            const apiErrorMessage = json.errors[0].message;
            const outputErrorMessage = `Error: ${apiErrorMessage}`
            errorMessage(regBtn, outputErrorMessage);
            return false;
        }
    } catch (error) {
        //find out what to put in here
        console.log(error);
        return false;
    }
};

//put api response actions in here
// what do i wanna do here

// needs to NOT reset error message but form input for when reg successful
//finish for if successfull - error part below
// if registration not successful, red ("error") message display the error code and error message(error message needs to be hardcoded if im not wrong, just do the most common ones and then one for "if error message anything else than "xxx", print this: "contact /help blabla")
// needs to "reset" error message but not form input for when error wrong

