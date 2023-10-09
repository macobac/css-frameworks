import { API_BASE_URL } from "../api/apiLinks.mjs";
import { API_REG_URL } from "./apiLinks.mjs";
import { register } from "../handlers/register.mjs";

const regForm = document.querySelector("#regform");
const regFormAction = regForm.getAttribute('action');

export function registerUser() {
regForm.addEventListener('submit', (e) => {
    
    const newUserName = document.querySelector("#regusername").value;
    const newUserEmail = document.querySelector("#regemail").value;
    const newUserPassword = document.querySelector("#regpassword").value;
    const userToReg = {
        name: `${newUserName}`,
        email: `${newUserEmail}`,
        password: `${newUserPassword}`,
    }
    register(API_REG_URL, userToReg);
    regForm.submit();
    e.preventDefault();
})


}