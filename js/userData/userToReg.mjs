import { regName, regEmail, regPassword } from "../userData/formData.mjs";

export const userToReg = {
    "name": regName.value,
    "email": regEmail.value,
    "password": regPassword.value,
};
