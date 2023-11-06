import { registerUrl } from "../auth/constants.mjs";
import userToReg from "../userData/userToReg.mjs";
import registerUser from "../auth/registerUser.mjs";
import { regForm } from "../auth/constants.mjs";


regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userObj = userToReg();
    const registrationSuccessful = await registerUser(registerUrl, userObj);
    if (registrationSuccessful) {
      regForm.reset(); 
    }
})
