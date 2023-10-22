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
        const json = await response.json();
        console.log(json);
        const action = document.querySelector("#regform");
        const attribute = action.getAttribute("action");
        if (response.ok) {
            window.location.replace(attribute);
        }
    } catch (error) {
        console.log(error);
    }
}



