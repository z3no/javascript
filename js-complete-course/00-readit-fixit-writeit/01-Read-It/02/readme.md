# READ IT
## EX 02
* Open index.html in your browser. What is the difference between this and the previous example?
    * *Here we wrote our javascript in a separate .js file and we linked it. In the previous example it was inline. We are also working with a constant that has an integer.*


* Do you notice a difference between the 2 document.write lines?
  * *On the first document.write() method we make use of **concatenation**, string + constant + string, this happens with the + sign. But this can be hard to read especially when you have multiple expressions.*
  * ```
    document.write("<h1>Top " + amount + " Greatest Movies of All Time</h1>");
    ```
    
  * *The second document.write() method makes use of a **template literal**. By using template literals we can avoid the concatenation operator, this will improve the readability of our code. We make use of placeholders in the form of **${expression}** to perform substitutions for embedded expressions.*
  * ```
    document.write(`<h2>The first ${amount / 2} movies</h2>`);
    ```
* Look at the 'Template literals' documentation
  * **[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)**

For example it would be better to write our first document.write() line in the following way:
* ```
  document.write(`<h1>Top ${amount} Greatest Movies of All Time</h1>`);
  ```