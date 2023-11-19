export default async function displayPost(posts) {
    const newDiv = document.createElement("div");
    const newTitle = document.createElement("h2");
    newTitle.innerText = posts.title;
    const newBody = document.createElement("p");
    newBody.innerText = posts.body;
    //const newImg = document.createElement("img");
    //newImg.src = posts.media;

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newBody);
    //newDiv.appendChild(newImg);

    const currentDiv = document.querySelector(".fetchPostsDiv");
    document.body.insertBefore(newDiv, currentDiv);
}