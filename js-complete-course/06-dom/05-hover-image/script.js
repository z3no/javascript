/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      When hovering over the image, change its source attribute to the value specified in the "data-hover" attribute.
 *
 *  INFORMATION:
 *      https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *      https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
 *      https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src
 *      https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover
 *      https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout
 */

(function mouse() {

    // your code here

    // returns the first element within the document that matches the specified selector, or group of selectors.
    let img = document.querySelector('img');
    // HTMLImageElement property src, which reflects the HTML src attribute, specifies the image to display in the <img> element.
    let start = img.src;
    // returns the value of a specified attribute on the element.
    let hover = img.getAttribute('data-hover');

    // when we hover the mouse it gets the image src of the 'data-hover' attribute
    img.onmouseover = () => { img.src = hover; }
    // when the mouse is not hovering the image it goes back to the original src picture
    img.onmouseout = () => { img.src = start; }

})();