export const apiBaseUrl = 'https://api.noroff.dev/api/v1';
export const registerUrl = `${apiBaseUrl}/social/auth/register`;
export const loginUrl = `${apiBaseUrl}/social/auth/login`;
export const postsUrl = `${apiBaseUrl}/social/posts`;

export const regBtn = document.querySelector(".regbtn");
export const regForm = document.querySelector("#regform");

export const regName = document.querySelector('#regusername');
export const regEmail = document.querySelector('#regemail');
export const regPassword = document.querySelector('#regpassword');

export const loginBtn = document.querySelector(".loginbtn");
export const loginForm = document.querySelector("#loginform");

export const loginEmail = document.querySelector('#useremail');
export const loginPassword = document.querySelector('#loginpassword');

export const regSuccessMessage = `Your registration was successful, you can now log in.`;
export const genericErrorMessage = `An unexpected error occurred. Please try again later. If the error persists, contact us.`

export const fetchBtn = document.querySelector(".fetchBtn")
export const fetchedDiv = document.querySelector(".fetchPostsDiv");
