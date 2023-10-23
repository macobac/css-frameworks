export default function userToLogin() {
    const loginEmail = document.querySelector('#useremail');
    const loginPassword = document.querySelector('#loginpassword');

    const user = {
        email: loginEmail.value,
        password: loginPassword.value
    };
    return user;
}
