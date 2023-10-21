import { registerUrl } from "./auth/apiConst.mjs";
import { userToRegister } from "./userData/registeredUser.mjs";
import registerUser from "./auth/register.mjs";

registerUser(registerUrl, userToRegister);