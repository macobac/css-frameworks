import { loginUrl } from "./auth/apiConst.mjs";
import { userToLogin } from "./userData/userToLogin.mjs";
import loginUser from "./auth/loginUser.mjs";

loginUser(loginUrl, userToLogin);