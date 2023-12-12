/**
 * 
 * @param {any} btn 
 * @param {string} successMsg 
 * ```js
 * successMessage(btn, successMsg);
 * ``` 
 */
export default function successMessage(btn, successMsg) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = successMsg;
    successDiv.style.color = 'green';
    btn.parentNode.insertBefore(successDiv, btn.nextSibling);
}