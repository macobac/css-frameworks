export default async function displayPost(posts) {
    const newDiv = document.createElement("div");
    const newTitle = document.createElement("p");
    newTitle.innerText = posts.title;

    newDiv.appendChild(newTitle);

    const currentDiv = document.querySelector(".fetchPostsDiv");
    document.body.insertBefore(newDiv, currentDiv);
}