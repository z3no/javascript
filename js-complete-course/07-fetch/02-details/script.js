/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
 *  CHALLENGE:
 *      When you click on the button, get the id from the form, then get the corresponding X-Men from the API and display it in the tag whose id is "target".
 *      Use the tag template to reproduce a suitable html structure.
 *
 *  INFORMATION:
 *      https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *      https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 */

(() => {
    // your code here
    const button = document.getElementById('run');
    const target = document.getElementById('target');

    button.addEventListener("click", getXMenById);

    // Defining async function
    async function getXMenById () {
        const heroId = document.getElementById('hero-id').value;

        // Storing response
        const response = await fetch (`http://localhost:3000/heroes/${heroId}`);
        // If the call failed, give an error
        if (!response.ok) {
            throw 'Something went wrong!';
        }
        // Storing data in form of JSON
        const data = await response.json();

        // Reproduce html structure
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const strong = document.createElement("strong");
        const em = document.createElement("em");
        const p = document.createElement("p");
        target.appendChild(li);
        li.appendChild(h4);
        li.appendChild(p);
        h4.appendChild(strong);
        h4.appendChild(em);
        strong.innerHTML = `${data.name}`;
        em.innerHTML = ` aka ${data.alterEgo}`;
        p.innerHTML = data.abilities;
    }


})();
