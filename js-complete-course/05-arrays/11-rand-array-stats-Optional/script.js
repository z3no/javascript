/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
        When you click the button, display the ten elements of an array of 10 numbers (between 1 and 100) in the table.
        Then display in the definition list: the smallest number, the biggest number, the sum of all numbers, and their average.
 */

/*  INFORMATION:
        developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
        developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 */

(function() {

    // your code here
    const randomNumbers = [];

    for (i=0; i<10; i++){
        randomNumbers.push(Math.floor(Math.random()*100));
    }

    document.getElementById('run').addEventListener("click", function (){
        //console.log(randomNumbers);
        randomNumbers.forEach((number, index) => {
            let tdId = "n-" + (index + 1).toString();
            //console.log(tdId);
            let value = number.toString();
            //console.log(value);
            document.getElementById(tdId).innerText = value;
        });

        document.getElementById('min').innerText = Math.min(...randomNumbers);
        document.getElementById('max').innerText = Math.max(...randomNumbers);
        // array.reduce() is something we have seen in exercise 09 of this chapter
        const sumNumbers = randomNumbers.reduce((previousValue, nextValue) => previousValue + nextValue, 0);
        document.getElementById('sum').innerText = sumNumbers;
        document.getElementById('average').innerText = sumNumbers / randomNumbers.length

    });

})();
