import { onePostDiv } from "../auth/constants.mjs";
import formatDate from "./formatDate.mjs";
import deletePost from "../auth/deletePost.mjs";

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
        updateBtn.classList.add("btn", "btn-outline-primary");
        innerDiv.appendChild(updateBtn);
        updateBtn.addEventListener('click', () => {
            const updateUrl = `updatePost.html?id=${post.id}&title=${encodeURIComponent(post.title)}&body=${encodeURIComponent(post.body)}&media=${encodeURIComponent(post.media)}`;
            window.location.href = updateUrl;
        })
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = `Delete post`;
        deleteBtn.classList.add("btn", "btn-outline-primary");
        innerDiv.appendChild(deleteBtn);
        await deletePost(deleteBtn, post.id);
}
}