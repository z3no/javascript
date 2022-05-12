/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      In this exercise I want you to learn how to interact with external API's.
 *      To help you practice I provided you with a small local API you can find on _shared/api.json.
 *      For now just fetch the entire JSON object from the resource and log it to your console.
 *      Once the REST API of the exercise has been launched you can access it at the same domainname:port that your server resides on (in PhpStorm this is likely localhost:63342, on a apache server this will be localhost:9001).
 *      This small API follows the REST precepts, and contains, under the heroes property, data about X-Men.
 *      When you click on the button, use the fetch function and following the JSON object, retrieve the list of X-Men and display it in the console.
 *
 *  INFORMATION:
 *      https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 *      https://developer.mozilla.org/en-US/docs/Web/API/fetch
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *      https://developer.mozilla.org/en-US/docs/Web/API/Response
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
 *      https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 *      https://developer.mozilla.org/en-US/docs/Web/API/Response/json
 */

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", getXMen);

    async function getXMen () {
        // await is used to wait for a 'Promise'
        // fetching a resource from the network, returning a 'Promise' which is fulfilled once the response is available
        let list = await fetch ('http://localhost:3000/heroes');
        // we retrieve the response as JSON using the json() function of the Response object
        let XMen = await list.json();
        // our console.log will display the XMen list in the JSON text-based format
        console.log(XMen);
    }

})();
