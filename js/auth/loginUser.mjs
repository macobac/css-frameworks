/**
 * API call that logs in user
 * @param {string} url 
 * @param {any} userData 
 * ```js
 * loginUser(loginUrl, userToLogin);
 * ``` 
 */
export default async function loginUser(url, userData) {
    console.log(userData)
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        if (response) {
            const json = await response.json();
            const accessToken = json.accessToken;
            if (accessToken) {
                localStorage.setItem('accessToken', accessToken)
            } else {
                console.log("No accesstoken found")
            }
            console.log(json);
            const formEl = document.querySelector("#loginform");
            if (formEl) {
                const attribute = formEl.getAttribute("action");
                if (attribute) {
                    //window.location.href = attribute;
                    console.log(accessToken);
                } else {
                    console.log("Form element doesn't have an 'action' attribute.");
                }
            } else {
                console.log("Form element not found.");
            }
        } else {
            console.log("Failed to login the user. Status code: " + response.status);
        }

    } catch (error) {
        console.log(error);
    }
}