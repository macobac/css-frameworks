import { loginUrl, loginForm, loginBtn } from "../auth/constants.mjs";
import userToLogin from "../userData/userToLogin.mjs";
import loginUser from "../auth/loginUser.mjs";
import clearMessage from "../auth/clearMessage.mjs";

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearMessage(loginBtn, 'error-message');
    const userObj = userToLogin();
    loginUser(loginUrl, userObj);
})
