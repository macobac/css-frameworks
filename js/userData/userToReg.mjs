import { regName, regEmail, regPassword } from "../auth/constants.mjs";
import {  } from "../auth/constants.mjs";

/**
 * 
 * @returns {object} user
 */
export default function userToReg() {
    const user = {
        name: regName.value,
        email: regEmail.value,
        password: regPassword.value
    };
    return user;
}
