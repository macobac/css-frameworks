import { loginEmail, loginPassword } from "../auth/constants.mjs";

/**
 * 
 * @returns {object} user
 */
export default function userToLogin() {
    const user = {
        email: loginEmail.value,
        password: loginPassword.value
    };
    return user;
}
