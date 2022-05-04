# READ IT
## EX 03
* Open script.js and try to predict the result of the script. Explain.
  * ```
    const amount = 10;
    for (let i = 0; i < amount; i++) {
    console.log(i);
    document.write(`<p>${i + 1}</p>`);
    }
    ```
  * We declare a constant **amount** with an integer value of 10. Then we have a for statement which creates a loop with three expressions. This is followed with a statement that is going to be executed in the loop.
    The for statement starts by declaring the variable i and initializing it to 0. It checks that i is less than the constant amount (which has a value of 10), it will perform the succeeding statements, and increment (add up) i by 1 after each pass through the loop.
    So in our console it will give us all numbers from 0 to 9 (0,1,2,3,4,5,6,7,8,9), because we gave i the value of 0.
    But in document.write() we add 1 to our variable i, it does ${0 + 1}, so we get 1 instead of 0 to start with. So it will write the numbers from 1 to 10 (1,2,3,4,5,6,7,8,9,10) on our screen.


* Open the developer tools in your browser and inspect the 'console' tab.

