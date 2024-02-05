# Understanding TypeScript

https://www.udemy.com/course/understanding-typescript/

## TypeScript
A superset of JavaScript - a language built on top of JS with new features, which makes writing the code easier and more powerful. 
Browsers and JS environments can't execute TS. 
TS is a language and a tool: a compiler run over code to compile TS code into JS.

Write code in TS with new features and advantages, which produces normal JS code. 
The compiler compiles TS code to more complex JS code.

TS adds types, which aids identifying errors earlier before runtime. 

### Why TypeScript?
```js
function add(x, y) {
    return x + y;
}

console.log(add('2', '3'));
```
This causes unwanted behaviour as it concatenates the string. 
It won't provide a syntax error, but a logical error. 

In JS it is possible to use mitigation strategies like adding if statements to validate and sanitise inputs. 
In this case it is still possible to write bad code, so TS helps write better code. 

**A practical example:**

Following the `add` function, it may be used with variables instantiated by a `document.getElementById(...).value` function. 
The HTML elements may be `<input type="number" />`. 

In JS when the `value` is accessed, it is a string regardless of the `type` of the `input`.

Without TS it requires adding a if-else condition to check if `typeof num === "number"`. 
But this is writing extra code for an error scenario which could be prevented in the first place - ensure it's not even possible to provide strings to the `add` function. 
So there's no need for the if statement inside `add`. 

**Advantages of TypeScript:**
* Types - avoiding errors and IDE support (e.g. autocompletion, built-in errors)
* Next-gen JS features - compiled down to JS worksrounds for older browsers
* Interfaces and Generics
* Meta-programming features - e.g. decorators
* Rich configuration options - behaves as wanted
* Modern tooling helps even for non-TS projects

# 1. Getting Started

Install the TS compiler with Node: `npm install -g typescript`.

VSCode Extensions:
* ESLint
* Path Intellisense
* Prettier

## Simple Project Setup
See [`sample-project`](../sample-project/). 

`npm init` and `npm install --save-dev lite-server`

lite-server is a lightweight development server which always serves the index.html. It reloads the page when a file in the directory changes. Still need to compile TS code.

`npm start`

# 2. Working with Types
See [Working with Types](types.md)

* Core Syntax and Features
