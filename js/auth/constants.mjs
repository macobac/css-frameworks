export const apiBaseUrl = 'https://api.noroff.dev/api/v1';
export const registerUrl = `${apiBaseUrl}/social/auth/register`;
export const loginUrl = `${apiBaseUrl}/social/auth/login`;
export const postsUrl = `${apiBaseUrl}/social/posts`;

export const regBtn = document.querySelector(".regbtn");
export const regForm = document.querySelector("#regform");

export const regName = document.querySelector('#regusername');
export const regEmail = document.querySelector('#regemail');
export const regPassword = document.querySelector('#regpassword');