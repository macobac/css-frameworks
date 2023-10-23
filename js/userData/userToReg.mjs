export default function userToReg() {
    const regName = document.querySelector('#regusername');
    const regEmail = document.querySelector('#regemail');
    const regPassword = document.querySelector('#regpassword');

    const user = {
        username: regName.value,
        email: regEmail.value,
        password: regPassword.value
    };
    return user;
}
