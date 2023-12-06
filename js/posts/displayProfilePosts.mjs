import { fetchedDiv } from "../auth/constants.mjs";

import formatDate from "../posts/formatDate.mjs";

export default async function displayPost(posts) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card", "my-3", "mx-auto");
    
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("card-body");
    const newTitle = document.createElement("h2");
    newTitle.innerText = posts.title;
    newTitle.classList.add("card-title");
    const newBody = document.createElement("p");
    newBody.innerText = posts.body;
    newBody.classList.add("card-text");
    const newDate = document.createElement("p");
    newDate.innerText = formatDate(posts.created);
    newDate.classList.add("postCreatedOn");

    let newImg;
    if (posts.media) {
        newImg = document.createElement("img");
        newImg.src = posts.media;
        newImg.classList.add("card-img-top");
    };
    if (newImg) {
        innerDiv.appendChild(newImg);
    };


    innerDiv.appendChild(newDate);
    innerDiv.appendChild(newTitle);
    innerDiv.appendChild(newBody);
    
    newDiv.appendChild(innerDiv);

    fetchedDiv.appendChild(newDiv);
}