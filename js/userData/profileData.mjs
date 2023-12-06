import { profileName, profileFollowing, profileFollowers, profileImage, profilePostsNr, profileBanner } from "../auth/constants.mjs";

export default function profileData(data) {
    profileName.innerText = data.name;
    profileFollowing.innerText = `Following: ${data._count.following}`;
    profilePostsNr.innerText = `Posts: ${data._count.posts}`;
    profileFollowers.innerText = `Followers: ${data._count.followers}`;

    if (data.avatar) {
        profileImage.src = data.avatar;
    }

    if (data.banner) {
        profileBanner.style.backgroundImage = `url(${data.banner})`;
    }
}



