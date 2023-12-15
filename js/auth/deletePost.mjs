import fetchDeletePost from "./fetchDeletePost.mjs";
import successMessage from "./successMessage.mjs";
import errorMessage from "./errorMessage.mjs";

export default async function deletePost(btn, id) {
    btn.addEventListener('click', () => {
        try { 
            fetchDeletePost(id);
            successMessage(btn, `Your post has been successfully deleted. Please refresh the page to see the changes made.`);
        }
        catch (error) {
            errorMessage(error);
        };
    });
};