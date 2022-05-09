/* becode/javascript
 *
 * /05-arrays/05-walk-three/script.js - 5.5: parcours de tableau (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//  CHALLENGE: When you click the button, display on the console, one after the other, the name of each person in the array people. Use the forEach method.
/*  INFORMATION:
        developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
            - Take a look at the Find an object in an array by one of its properties examples.
 */

(function() {

    var people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];

    // your code here
    document.getElementById('run').addEventListener("click", function (){
        people.forEach(element => console.log(`${element.firstname} ${element.lastname}`));
    });

})();
