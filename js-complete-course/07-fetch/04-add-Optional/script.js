/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
 *  CHALLENGE:
 *      When you click on the button, retrieve the values of the form and create the new hero in the API.
 *      Each field must be filled in (it is up to you to manage).
 *      Display the result of all your heroes in the console.
 *
 *      Caution: powers must be stored in the same format as the previous heroes!
 *      You do not have to update the JSON file, it is oké that when you refresh the page you lose the newly added heroes.
 *
 *  INFORMATION:
 *
 */

(() => {
    // your code here
    const button = document.getElementById('run');
    const API_url = ('http://localhost:3000/heroes');

    async function getApi() {
        const response = await fetch(API_url);
        if (!response.ok) {
            throw 'Something went wrong, friend'
        }
        const data = await response.json();
    }

    let newHeroArray = [];

    const nameInput = document.getElementById('hero-name').value;
    const alterEgoInput = document.getElementById('hero-alter-ego').value;
    const powersInput = document.getElementById('hero-powers').value;

    button.addEventListener("click", getApi);

})();
