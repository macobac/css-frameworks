export const apiBaseUrl = 'https://api.noroff.dev/api/v1';
export const registerUrl = `${apiBaseUrl}/social/auth/register`;
export const loginUrl = `${apiBaseUrl}/social/auth/login`;
export const postsUrl = `${apiBaseUrl}/social/posts`;
export const profilesUrl = `${apiBaseUrl}/social/profiles`;

export const regBtn = document.querySelector(".regbtn");
export const regForm = document.querySelector("#regform");

export const regName = document.querySelector('#regusername');
export const regEmail = document.querySelector('#regemail');
export const regPassword = document.querySelector('#regpassword');

export const loginBtn = document.querySelector(".loginbtn");
export const loginForm = document.querySelector("#loginform");

export const loginEmail = document.querySelector('#useremail');
export const loginPassword = document.querySelector('#loginpassword');

export const postSuccessMessage = `Your post has been posted.`
export const regSuccessMessage = `Your registration was successful, you can now log in.`;
export const genericErrorMessage = `An unexpected error occurred. Please try again later. If the error persists, contact us.`;

export const fetchBtn = document.querySelector(".fetchBtn");
export const fetchedDiv = document.querySelector(".fetchPostsDiv");

export const latestPosts = document.querySelector(".latest-posts");
export const oldestPosts = document.querySelector(".oldest-posts");

export const profileName = document.querySelector("#profile-name")
export const profileFollowing = document.querySelector("#profile-following");
export const profileFollowers = document.querySelector("#profile-followers");
export const profileImage = document.querySelector("#profile-image");
export const profilePostsNr = document.querySelector("#profile-posts-nr");
export const profileBanner = document.querySelector("#profile-banner");

export const newPostBtn = document.querySelector("#new-post-btn");
export const inputTitle = document.querySelector("#inputTitle");
export const inputMedia = document.querySelector("#inputMedia");
export const inputBody = document.querySelector("#inputBody");
export const createPostBtn = document.querySelector("#createPostBtn");

export const logoutBtn = document.querySelector("#logoutBtn");

export const onePostDiv = document.querySelector("#onePostDiv");

export const submitUpdateBtn = document.querySelector("#submitUpdateBtn");
export const inputUpdateTitle = document.querySelector("#inputUpdateTitle");
export const inputUpdateMedia = document.querySelector("#inputUpdateMedia");
export const inputUpdateBody = document.querySelector("#inputUpdateBody");

export const appendBtnDiv = document.querySelector("#appendBtnDiv");