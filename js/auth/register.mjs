import { registerUrl } from "../auth/constants.mjs";
import userToReg from "../userData/userToReg.mjs";
import registerUser from "../auth/registerUser.mjs";

const regForm = document.querySelector('#regform');

regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userObj = userToReg();
    registerUser(registerUrl, userObj);
})

