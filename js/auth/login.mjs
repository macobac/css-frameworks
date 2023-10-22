import { loginUrl } from "../auth/apiConst.mjs";
import { userToLogin } from "../userData/userToLogin.mjs";
import loginUser from "../auth/loginUser.mjs";
import { loginEmail } from "../userData/formData.mjs";

const loginBtn = document.querySelector('loginbtn');

loginEmail.addEventListener('input', function() {
    console.log(loginEmail.value);
})
