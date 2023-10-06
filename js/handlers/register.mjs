/**
 * API call that registers new user
 * @param {string} url 
 * @param {any} userData 
 * @example
 * ```js
 * const userToReg = {
    name: `${newUserName}`,
    email: `${newUserEmail}`,
    password: `${newUserPassword}`,
   }

 * const regUrl = `${API_BASE_URL}/social/auth/register`;
 * regUser(regUrl, userToReg);
 * 
 * //url takes API link to register
 * //userData takes user data that will get user registered - requires name, email, password - avatar and banner is optional.
 * //required due to API
 * ```
 */
export async function regUser(url, userData) {
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
            window.location.replace(regFormAction);
        } else {
            console.log("smth went wrong");
        }
    } catch (error) {
        console.log(error);
    }
}
