/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
 *  CHALLENGE:
 *      When you click on the button, use the fetch function, retrieve the list of X-Men and display it in the tag whose id is "target".
 *      Use the template tag to reproduce an html structure for each hero.
 *      The template tag already exists in the HTML structure, be sure to check the HTML code!
 *
 *  INFORMATION:
 *      https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *      https://www.w3schools.com/jsref/met_node_clonenode.asp
 *      https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 *      https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 */

(() => {
    // your code here
    const target = document.getElementById('target');
    const template = document.getElementById('tpl-hero').content;

    async function getXMenAPI() {
        const response = await fetch ('http://localhost:3000/heroes')
        if (!response.ok) {
            throw 'Something went wrong!'
        }
        const data = await response.json();
        return data;
    }

    async function displayXMen() {
        const heroes = await getXMenAPI()
        heroes.forEach(xmen => {
            const clone = template.cloneNode(true);

            const name = clone.querySelector('.name');
            name.textContent = xmen.name;

            const alterEgo = clone.querySelector('.alter-ego');
            alterEgo.textContent = ` aka ${xmen.alterEgo}`;

            const powers = clone.querySelector('.powers');
            powers.textContent = xmen.abilities;

            target.appendChild(clone);
        })
    }

    document.getElementById('run').addEventListener("click", displayXMen);

})();
