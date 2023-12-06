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
        const profileResponse = await fetch(`${profilesUrl}/${userId}`, fetchOptions);
        const fetchedData = await profileResponse.json();
        profileData(fetchedData);

        const postsResponse = await fetch(`${profilesUrl}/${userId}/posts`, fetchOptions);
        const profilePosts = await postsResponse.json();
        for (let i = 0; i < profilePosts.length; i++) {
            displayProfilePosts(profilePosts[i]);
        };
        
        /*const followOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const follow = //check if following
        const followResponse = await fetch(`${profilesUrl}/${userId}/${follow}`); */
        
       
    } catch (error) {
        console.error(error);
    }
}
