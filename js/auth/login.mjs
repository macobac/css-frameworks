import { loginUrl } from "../auth/apiConst.mjs";
import userToLogin from "../userData/userToLogin.mjs";
import loginUser from "../auth/loginUser.mjs";

const loginForm = document.querySelector('#loginform');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userObj = userToLogin();
    loginUser(loginUrl, userObj);
})

