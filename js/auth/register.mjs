import { registerUrl, regForm, regBtn } from "../auth/constants.mjs";
import userToReg from "../userData/userToReg.mjs";
import registerUser from "../auth/registerUser.mjs";
import clearMessage from "../auth/clearMessage.mjs";

regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userObj = userToReg();
    clearMessage(regBtn, 'error-message');
    clearMessage(regBtn, 'success-message');
    const registrationSuccessful = await registerUser(registerUrl, userObj);
    if (registrationSuccessful) {
      regForm.reset(); 
    }
})
