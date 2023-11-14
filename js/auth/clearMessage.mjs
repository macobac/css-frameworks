/**
 * 
 * @param {*} btn the submit button
 * @param {*} className classname of the message that you want to clear
 * ```js
 * clearMessage(btn, className);
 * ``` 
 */
export default function clearMessage(btn, className) {
    const existingMessage = btn.parentNode.getElementsByClassName(className);
    for (const message of existingMessage) {
        message.remove();
    }
}
