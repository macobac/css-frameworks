import { loginUrl, loginForm, loginBtn } from "../auth/constants.mjs";
import userToLogin from "../userData/userToLogin.mjs";
import loginUser from "../auth/loginUser.mjs";
import clearMessage from "../auth/clearMessage.mjs";

export default function login() {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearMessage(loginBtn, 'error-message');
        const userObj = userToLogin();
        loginUser(loginUrl, userObj);
    });
}
