import { fetchedDiv } from "../auth/constants.mjs";
import formatDate from "../posts/formatDate.mjs";
import deletePost from "../auth/deletePost.mjs";

/**
 * 
 * @param {any} posts 
 */
export default async function displayProfilePosts(posts, authorname) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card", "my-3", "mx-auto");
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("card-body");
    const newTitle = document.createElement("h2");
    newTitle.innerText = posts.title;
    newTitle.classList.add("card-title");
    newTitle.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = `singlePost.html?id=${posts.id}`;
    })
    const newBody = document.createElement("p");
    newBody.innerText = posts.body;
    newBody.classList.add("card-text");
    const newAuthor = document.createElement("p");
    newAuthor.innerText = authorname; 
    newAuthor.classList.add("card-text", "post-author", "text-primary");
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
    innerDiv.appendChild(newAuthor);
    innerDiv.appendChild(newDate);
    innerDiv.appendChild(newTitle);
    innerDiv.appendChild(newBody);
    newDiv.appendChild(innerDiv);
    fetchedDiv.appendChild(newDiv);

    const currentUser = localStorage.getItem('currentUserName');
    if (authorname === currentUser) {
        const updateBtn = document.createElement("button");
        updateBtn.innerText = `Update post`;
        updateBtn.classList.add("btn", "btn-outline-primary");
        innerDiv.appendChild(updateBtn);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = `Delete post`;
        deleteBtn.classList.add("btn", "btn-outline-primary");
        innerDiv.appendChild(deleteBtn);
        await deletePost(deleteBtn, posts.id)
}
}