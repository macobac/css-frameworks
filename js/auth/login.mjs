import { loginUrl } from "../auth/apiConst.mjs";
import { userToLogin } from "../userData/userToLogin.mjs";
import loginUser from "../auth/loginUser.mjs";

const loginBtn = document.querySelector('.loginbtn');


loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    loginUser(loginUrl, userToLogin)
})

