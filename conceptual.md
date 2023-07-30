### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?


    await and async are good ways of managing async in js.  before that was introduced you had to create XHR objects and nest
    a bunch of call backs. with async functions / promises you can call some asynchronous operation and then see if the promise is resolved.

- What is a Promise?
  an expectation of a future value (miliseconds)

- What are the differences between an async function and a regular function?

   async functions have the ability to use the await keyword, which is kind of what it sounds like. The code is able to
  'await' a certain value. js outside of async function runs synchronously, meaning each line is ran immediately after the previous one.

- What is the difference between Node.js and Express.js?

  node.js is a runtime for javascript that is separate from the browser. it exists on your machine. express is a backend framework
  for node that makes creating a web app easy*

- What is the error-first callback pattern?

  the error is the first parameter in this pattern and the first thing handled by the following code

- What is middleware?

  code that executes in the 'middle' of the request/response cycle. this code has access to the 'req' and 'response' objects

- What does the `next` function do?

  calls the next function or passes control to the next middleware function

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

  Issues: 
  1. no error handling. there could be errors with the reqest, or with parsing the json. 
  2. the objects being returned are promises which are not as useful has maybe cleaning 
  up and structuring the data into something more readable and useful.
  3. the user promises should be named something that indicates they are promises, even just mattData or something
  4. (2. continued) it would be better to return the desired from within the promises, there is very little we can do with these.
