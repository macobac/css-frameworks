import { registerUrl } from "../auth/apiConst.mjs";
import { userToReg } from "../userData/userToReg.mjs";
import registerUser from "../auth/registerUser.mjs";

const regBtn = document.querySelector('.regbtn');

regBtn.addEventListener('submit', (event) => {
    event.preventDefault();
    registerUser(registerUrl, userToReg);
})

