import { profileName, profileFollowing, profileFollowers, profilesUrl } from "./auth/constants.mjs";

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
        const profileData = await response.json();

        profileName.innerText = profileData.name;
        profileFollowing.innerText = `Following: ${profileData._count.following}`;
        profileFollowers.innerText = `Followers: ${profileData._count.followers}`;
       
    } catch (error) {
        console.error(error);
    }
}

fetchProfileData(userId);