import { registerUrl } from "../auth/constants.mjs";
import userToReg from "../userData/userToReg.mjs";
import registerUser from "../auth/registerUser.mjs";
import { regForm } from "../auth/constants.mjs";


regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userObj = userToReg();
    registerUser(registerUrl, userObj);
    //if it was successful, clear form data but keep successMsg, if not successful, dont clear form data or errormsg - on refresh both Msg should clear
})

