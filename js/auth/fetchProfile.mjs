import profileData from "../userData/profileData.mjs";
import { profilesUrl} from "./constants.mjs";
import displayProfilePosts from "../posts/displayProfilePosts.mjs";


/**
 * 
 * @param {string} userId 
 */
export default async function fetchProfileData(userId) {
    const token = localStorage.getItem('accessToken');
    try {
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
            displayProfilePosts(profilePosts[i], userId);
        };
    } catch (error) {
        console.error(error);
    }
}
