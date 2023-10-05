//her skal det bare importeres for å registrere ny user. alt jeg trenger for å registrere useren skal utføres her

const API_BASE_URL = 'https://api.noroff.dev/api/v1';
//End-points:
//Register:  /social/auth/register
//Login:  /social/auth/login
//Get All posts: /social/posts

//import this function rather?
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
async function regUser(url, userData) {
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

const regForm = document.querySelector("#regform");
const regFormAction = regForm.getAttribute('action');

regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUserName = document.querySelector("#regusername").value;
    const newUserEmail = document.querySelector("#regemail").value;
    const newUserPassword = document.querySelector("#regpassword").value;
    const userToReg = {
        name: `${newUserName}`,
        email: `${newUserEmail}`,
        password: `${newUserPassword}`,
    }
    const regUrl = `${API_BASE_URL}/social/auth/register`;
    regUser(regUrl, userToReg);
    regForm.submit;
})


