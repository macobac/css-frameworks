/**
 * API call that logs in existing user
 * @param {string} url 
 * @param {any} userData 
 * @example
 * ```js
 * const userToLogin = {
    email: `${userEmail}`,
    password: `${userPassword}`,
   }

 * const loginUrl = `${API_BASE_URL}/social/auth/login`;
 * loginUser(loginUrl, userToLogin);
 * 
 * //url takes API link (either to register or to login)
 * //userData takes user data that will get user logged in - requires email, password.
 * //required due to API
 * ```
 */
  export async function loginUser(url, userData) {
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
        if (response.ok) {
            localStorage.setItem('accessToken', json.accessToken);
            window.location.replace(loginFormAction);
        } else {
            console.log("Accesstoken not found");
        }
    } catch (error) {
        console.log(error);
    }
}
