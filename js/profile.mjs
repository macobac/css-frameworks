import { profileName, profileFollowing, profileFollowers, profilesUrl, profileImage } from "./auth/constants.mjs";

import displayProfilePosts from "./posts/displayProfilePosts.mjs";

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("name");

async function fetchProfileData(userId) {
    try {
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(`${profilesUrl}/${userId}`, fetchOptions);
        console.log(response);
        const profileData = await response.json();
        console.log(profileData);
        profileName.innerText = profileData.name;
        profileFollowing.innerText = `Following: ${profileData._count.following}`;
        profileFollowers.innerText = `Followers: ${profileData._count.followers}`;
        if (profileData.avatar) {
            profileImage.src = profileData.avatar;
        }
        

        const postsres = await fetch(`${profilesUrl}/${userId}/posts`, fetchOptions);
        console.log(postsres);
        const profilePosts = await postsres.json();
        console.log(profilePosts);
        for (let i = 0; i < profilePosts.length; i++) {
            displayProfilePosts(profilePosts[i])
        }
       
       
    } catch (error) {
        console.error(error);
    }
}

fetchProfileData(userId);