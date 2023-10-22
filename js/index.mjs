import { registerUrl } from "./auth/apiConst.mjs";
import { userToReg } from "./userData/userToReg.mjs";
import registerUser from "./auth/registerUser.mjs";

//registerUser(registerUrl, userToReg);

import { loginUrl } from "./auth/apiConst.mjs";
import { userToLogin } from "./userData/userToLogin.mjs";
import loginUser from "./auth/loginUser.mjs";

//loginUser(loginUrl, userToLogin);

import { postsUrl } from "./auth/apiConst.mjs";
import getWithToken from "./auth/getWithToken.mjs";

//getWithToken(postsUrl);