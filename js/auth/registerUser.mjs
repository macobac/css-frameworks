
const regForm = document.querySelector("#regform");
const regFormAction = regForm.getAttribute('action');

regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUserName = document.querySelector("#regusername").value;
    const newUserEmail = document.querySelector("#regemail").value;
    const newUserPassword = document.querySelector("#regpassword").value;
    const userToReg = {
        name: `${newUserName}`,
        email: `${newUserEmail}`,
        password: `${newUserPassword}`,
    }
    const regUrl = `${API_BASE_URL}/social/auth/register`;
    regUser(regUrl, userToReg);
    regForm.submit;
})


