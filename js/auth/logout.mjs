import { logoutBtn } from "./constants.mjs";

export default function logout() {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUserName');
        window.location.href = '/index.html';
    });
}
