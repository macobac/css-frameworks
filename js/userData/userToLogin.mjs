import { loginEmail, loginPassword } from "../userData/formData.mjs";

export const userToLogin = {
    "email": loginEmail.value,
    "password": loginPassword.value,
};
