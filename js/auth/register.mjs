import { registerUrl } from "../auth/apiConst.mjs";
import { userToReg } from "../userData/userToReg.mjs";
import registerUser from "../auth/registerUser.mjs";

const regForm = document.querySelector('#regform');

regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    registerUser(registerUrl, userToReg);
})

