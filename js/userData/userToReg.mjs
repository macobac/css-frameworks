import { regName } from "../auth/constants.mjs";
import { regEmail } from "../auth/constants.mjs";
import { regPassword } from "../auth/constants.mjs";

export default function userToReg() {
    const user = {
        name: regName.value,
        email: regEmail.value,
        password: regPassword.value
    };
    return user;
}
