import { onePostDiv } from "../auth/constants.mjs";
import formatDate from "./formatDate.mjs";

/**
 * 
 * @param {any} posts 
 */
export default async function displaySinglePost(post) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card", "my-3", "mx-auto");
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("card-body");
    const newTitle = document.createElement("h2");
    newTitle.innerText = post.title;
    newTitle.classList.add("card-title");
    const newBody = document.createElement("p");
    newBody.innerText = post.body;
    newBody.classList.add("card-text");
    const newDate = document.createElement("p");
    newDate.innerText = formatDate(post.created);
    newDate.classList.add("postCreatedOn");
    const newAuthor = document.createElement("a");
    newAuthor.innerText = post.author.name;
    newAuthor.setAttribute('id', post.author.name);
    newAuthor.href = `profile.html?name=${post.author.name}`; 
    newAuthor.classList.add("card-text", "post-author");
    newAuthor.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = newAuthor.href;
    });
    let newImg;
    if (post.media) {
        newImg = document.createElement("img");
        newImg.src = post.media;
        newImg.classList.add("card-img-top");
    };
    if (newImg) {
        innerDiv.appendChild(newImg);
    };
    innerDiv.appendChild(newAuthor);
    innerDiv.appendChild(newDate);
    innerDiv.appendChild(newTitle);
    innerDiv.appendChild(newBody);
    newDiv.appendChild(innerDiv);
    onePostDiv.appendChild(newDiv);

    const currentUser = localStorage.getItem('currentUserName');
    if (post.author.name === currentUser) {
        const updateBtn = document.createElement("button");
        updateBtn.innerText = `Update post`;
        innerDiv.appendChild(updateBtn);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = `Delete post`;
        innerDiv.appendChild(deleteBtn);
}
}