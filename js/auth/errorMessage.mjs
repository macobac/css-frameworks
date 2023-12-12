/**
 * 
 * @param {any} btn 
 * @param {string} errorMsg 
 * ```js
 * errorMessage(btn, errorMsg);
 * ``` 
 */
export default function errorMessage(btn, errorMsg) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = errorMsg;
    errorDiv.style.color = 'red';
    btn.parentNode.insertBefore(errorDiv, btn.nextSibling);
}