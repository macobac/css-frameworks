import { loginEmail } from "../auth/constants.mjs";
import { loginPassword } from "../auth/constants.mjs";

export default function userToLogin() {
    const user = {
        email: loginEmail.value,
        password: loginPassword.value
    };
    return user;
}
