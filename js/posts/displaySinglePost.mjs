import { onePostDiv } from "../auth/constants.mjs";
import formatDate from "../posts/formatDate.mjs";

/**
 * 
 * @param {any} posts 
 */
export default async function displaySinglePost(posts) {
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
    const lastUpdate = document.createElement("p");
    lastUpdate.innerText = formatDate(posts.updated);
    lastUpdate.classList.add("postLastUpdated");
    const newAuthor = document.createElement("a");
    newAuthor.innerText = posts.author.name;
    newAuthor.href = `profile.html?name=${posts.author.name}`; 
    newAuthor.classList.add("card-text", "post-author");
    newAuthor.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = newAuthor.href;
    });
    let newImg;
    if (posts.media) {
        newImg = document.createElement("img");
        newImg.src = posts.media;
        newImg.classList.add("card-img-top");
    };
    if (newImg) {
        innerDiv.appendChild(newImg);
    };
    innerDiv.appendChild(newAuthor);
    innerDiv.appendChild(newDate);
    innerDiv.appendChild(lastUpdate);
    innerDiv.appendChild(newTitle);
    innerDiv.appendChild(newBody);
    newDiv.appendChild(innerDiv);
    onePostDiv.appendChild(newDiv);
}