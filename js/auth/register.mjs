import { registerUrl } from "./auth/apiConst.mjs";
import { userToReg } from "./userData/userToReg.mjs";
import registerUser from "./auth/registerUser.mjs";

registerUser(registerUrl, userToReg);