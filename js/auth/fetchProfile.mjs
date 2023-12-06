import profileData from "../userData/profileData.mjs";
import { profilesUrl } from "./constants.mjs";

import displayProfilePosts from "../posts/displayProfilePosts.mjs";



export default async function fetchProfileData(userId) {
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
        const fetchedData = await response.json();
        profileData(fetchedData)

        const postsres = await fetch(`${profilesUrl}/${userId}/posts`, fetchOptions);
        const profilePosts = await postsres.json();
        for (let i = 0; i < profilePosts.length; i++) {
            displayProfilePosts(profilePosts[i])
        }
        
       
    } catch (error) {
        console.error(error);
    }
}
