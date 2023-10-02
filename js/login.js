

const API_BASE_URL = 'https://api.noroff.dev/api/v1';
//End-points:
//Register:  /social/auth/register
//Login:  /social/auth/login
//Get All posts: /social/posts


//import this function rather?
/**
 * API call that registers new User or logs in existing user
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
async function loginUser(url, userData) {
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


const loginForm = document.querySelector("#loginform");
const loginFormAction = loginForm.getAttribute('action');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userEmail = document.querySelector("#useremail").value;
    const userPassword = document.querySelector("#loginpassword").value;
    const userToLogin = {
        email: `${userEmail}`,
        password: `${userPassword}`,
    }
    const loginUrl = `${API_BASE_URL}/social/auth/login`;
    loginUser(loginUrl, userToLogin);
    loginForm.submit;
})


// token request
//see if i can change this function a bit to fit my needs better
async function getWithToken(url) {
    try {
        console.log(url);
        const token = localStorage.getItem('accessToken');
        console.log(token);
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
}

const postsUrl = `${API_BASE_URL}/social/posts`;

//getWithToken(postsUrl);