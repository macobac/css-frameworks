import { fetchedDiv } from "../auth/constants.mjs";

export default async function displayPost(posts) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.style.width = "12rem";
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("card-body");
    const newTitle = document.createElement("h2");
    newTitle.innerText = posts.title;
    newTitle.classList.add("card-title");
    const newBody = document.createElement("p");
    newBody.innerText = posts.body;
    newBody.classList.add("card-text");
    const newAuthor = document.createElement("p");
    newAuthor.innerText = posts.author.name;
    newAuthor.classList.add("card-text", "post-author");
    //img can only be added if there is img. needs to fix
    //const newImg = document.createElement("img");
    //newImg.src = posts.media;
    //newImg.classList.add("card-img-top");
    

    //innerDiv.appendChild(newImg);
    innerDiv.appendChild(newAuthor);
    innerDiv.appendChild(newTitle);
    innerDiv.appendChild(newBody);
    
    newDiv.appendChild(innerDiv);

    fetchedDiv.appendChild(newDiv);
}