/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      Get the value of the "data-image" attribute from the element with id "source".
 *      Create a new image element inside the target element that displays the image referred to by the attribute value.
 *      Then remove the original element.
 *
 *  INFORMATION:
 *      developer.mozilla.org/en-US/docs/Web/API/Element/append
 *      developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
 *      developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 *      developer.mozilla.org/en-US/docs/Web/API/Element/remove
 *
 *  REMINDER:
 *      Double check the information, this exercise was a tough one to crack.
 */

(function() {

    // your code here

    // a variable source that gets the value of the data-image attribute from id source
    let source = document.getElementById('source').getAttribute('data-image');
    // creating a new img element
    let image = document.createElement('img');
    // add the source for the image
    image.src = source;
    // adding the image to our target id
    document.getElementById('target').append(image);
    // removing the original element
    document.getElementById('source').remove();

})();
