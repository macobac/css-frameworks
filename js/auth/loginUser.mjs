//her skal det bare importeres for å logge inn user. alt jeg trenger for å logge inn useren også skal det utføres her

import { API_BASE_URL } from "../api/apiLinks.mjs";
import { loginUser } from "./loginUserApi.mjs";


/*const loginForm = document.querySelector("#loginform");
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
*/

export function loginUser() {
    const loginForm = document.querySelector("#loginform");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = e.target;
      const email = formData.email.value;
      const password = formData.password.value;
      const userToLogin = {
        email: email,
        password: password,
      };
      const loginUrl = `${API_BASE_URL}/social/auth/login`;
      loginUser(loginUrl, userToLogin);
    });
  }

// token request
//see if i can change this function a bit to fit my needs better
/*async function getWithToken(url) {
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
*/
//getWithToken(postsUrl);

