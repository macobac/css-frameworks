import { logoutBtn } from "./constants.mjs";

export default function logout() {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/index.html';
    });
}
