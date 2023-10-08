import { API_BASE_URL } from "../api/apiLinks.mjs";
import { loginUser } from "../handlers/login.mjs";


const loginForm = document.querySelector("#loginform");
const loginFormAction = loginForm.getAttribute('action');


export function loginUser() {

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
    const loginForm = document.querySelector("#loginform");
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

