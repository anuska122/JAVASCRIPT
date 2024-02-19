# JAVASCRIPT

## In This Repository I am going to continue my pervious journey of learning Web Development.

### Here I am going to dive into Web Development in more detailed form than before and will be doing different interesting projects related to the topic I studied.

## Day1

### JavaScript Object
- Here I am going to Include JavaScript Object Defination and Properties.

**Object Defination**

- Objects are important data structures in JavaScript. This is partly because arrays are objects in JavaScript, and we'll use them all the time. JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

In JavaScript, almost "everything" is an object.

 - Booleans can be objects (if defined with the new keyword).
 - Numbers can be objects (if defined with the new keyword).
 - Strings can be objects (if defined with the new keyword).
 - Dates are always objects.
 - Maths are always objects.
 - Regular expressions are always objects.
 - Arrays are always objects.
 - Functions are always objects.
 - Objects are always objects.
All JavaScript values, except primitives, are objects.



**Object Properties**

Properties are the most important part of any JavaScript object. A JavaScript object is a collection of unordered properties. Properties can usually be changed, added, and deleted, but some are read only.

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/d343063c-4a52-4201-b8d3-863c144910c9)

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/191efecc-fc07-4948-bccf-bb332d947264)

## Day2

###  JavaScript Object
- Today I have learned about the sub-topics of Js object that is Object method, display, accessors, constructors and prototypes.

**JS Object Method**

- JavaScript methods are actions that can be performed on objects. Methods are functions stored as object properties.

**Object display**

- Some common solutions to display JavaScript objects are:

  - Displaying the Object Properties by name.
  - Displaying the Object Properties in a Loop.
  - Displaying the Object using Object.values().
  - Displaying the Object using JSON.stringify(). Any JavaScript object can be stringified (converted to a string) with the JavaScript 
    function JSON.stringify().

**JavaScript Accessors (Getters and Setters)**

- Getters and setters allow us to define Object Accessors (Computed Properties). We use accessor because it gives simpler syntax, allows equal syntax for properties and methods, it can secure better data quality and it is useful for doing things behind-the-scenes.

**Object prototype**

- All JavaScript objects inherit properties and methods from a prototype.
  - Date objects inherit from Date.prototype
  - Array objects inherit from Array.prototype
  - Person objects inherit from Person.prototype
  
- The Object.prototype is on the top of the prototype inheritance chain:

- Date objects, Array objects, and Person objects inherit from Object.prototype.


![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/710ef52f-d09c-44d9-85b2-c6dbe9e9983c)

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/e63cce86-1df5-4462-8f13-10d032e43d65)


## Day3

**JavaScript Object**
- Today I have learned about the sub-topics of Js object that is JS OBJ Iterables, sets, and maps.

**JavaScript Object Iterables**
- Iterable objects are objects that can be iterated over with for..of. Technically, iterables must implement the Symbol.iterator method.

**Objects set**
- A JavaScript Set is a collection of unique values. Each value can only occur once in a Set and set can hold any value of any data type.
 
- We can create a JavaScript Object Set by:
  - Passing an Array to new Set().
  - Create a new Set and use add() to add values.
  - Create a new Set and use add() to add variables.

**Object maps**
- A Map holds key-value pairs where the keys can be any datatype. It remembers the original insertion order of the keys and has a property that represents the size of the map.

- We can create a JavaScript Object Map by:
  - Passing an Array to new Map().
  - Create a Map and use Map.set().

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/c0d70de9-2654-4047-b958-fbd5205b7d36)

## Day4
**JavaScript Classes**

- In JavaScript, classes are a way to define blueprints for creating objects with similar properties and methods. JavaScript Classes are templates for JavaScript Objects. We use the keyword class to create a class and always we need to add a method named constructor():

 - constructor(): Special method for initializing newly created objects. It's called automatically when a new instance of the class is created.

   The constructor method is a special method:
     -  It has to have the exact name "constructor".
     -  It is executed automatically when a new object is created.
     -  It is used to initialize object properties.

**Class Inheritance**
- To create a class inheritance, we use the extends keyword. A class created with a class inheritance inherits all the methods from another class. Inheritance is useful for code reusability;reuse properties and methods of an existing class when we create a new class.

_Unlike functions, and other JavaScript declarations, class declarations are not hoisted. That means that we must declare a class before you can use it._

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/a99105dd-09c3-4a66-af80-36c4ca4af3c1)

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/842c147e-27eb-4ffc-a0ad-27023e30dadd)

## Day5

**JavaScript Validation**
- JavaScript provides facility to validate the form on the client-side so data processing will be faster than server-side validation. Most of the web developers prefer JavaScript form validation. Through JavaScript, we can validate name, password, email, date, mobile numbers and more fields.

- checkValidity(): Returns true if an input element contains valid data.
- setCustomValidity():	Sets the validationMessage property of an input element.

**Constraint Validation DOM Properties**

  - validity:	Contains boolean properties related to the validity of an input element.
  - validationMessage:	Contains the message a browser will display when the validity is false.
  -  willValidate:	Indicates if an input element will be validated.

**Validity Properties**
- The validity property of an input element contains a number of properties related to the validity of data:
  - customError:	Set to true, if a custom validity message is set.
  - patternMismatch:	Set to true, if an element's value does not match its pattern attribute.
  - rangeOverflow:	Set to true, if an element's value is greater than its max attribute.
  - rangeUnderflow:	Set to true, if an element's value is less than its min attribute.


![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/6ecee544-2667-4446-8dbb-ca93b020f4ed)

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/04496f4b-f52a-4463-8c38-ed743b647455)


## Day6

Today let's have some sneak peek about the Web Storage API.

**Web Storage API**
- The Web Storage API is a simple syntax for storing and retrieving data in the browser. They allow web applications to store data locally on the 
 client-side, such as user preferences, session data, or cached resources.

**The localStorage Object**
- The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data 
 items for that domain. The data is stored with no expiration date, and will not be deleted when the browser is closed. The data will be available 
 for days, weeks, and years.

**The setItem() Method**
- The localStorage.setItem() method stores a data item in a storage. It takes a name and a value as parameters.

**The getItem() Method**
- The localStorage.getItem() method retrieves a data item from the storage. It takes a name as parameter.

**The sessionStorage Object**
- The sessionStorage object is identical to the localStorage object. The difference is that the sessionStorage object stores data for one session. 
 The data is deleted when the browser is closed.

**Storage Object Properties and Methods**

  - key(n):	Returns the name of the nth key in the storage.
  - length:	Returns the number of data items stored in the Storage object.
  - getItem(keyname):	Returns the value of the specified key name.
  - setItem(keyname, value):	Adds a key to the storage, or updates a key value (if it already exists).
  - removeItem(keyname):	Removes that key from the storage.
  - clear():	Empty all key out of the storage.

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/3429c1f5-93dd-4adc-a83e-21a3d6d33b11)


## Day7

**Web Geolocation API**
- It Locates the User's Position. The HTML Geolocation API is used to get the geographical position of a user. Since this can compromise privacy, the position is not available unless the user approves it. Geolocation is most accurate for devices with GPS, like smartphones. The Geolocation API will only work on secure contexts such as HTTPS. If our site is hosted on a non-secure origin (such as HTTP) the requests to get the users location will no longer function.

**Using the Geolocation API**
- The getCurrentPosition() method is used to return the user's position.


![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/c973d95e-74b5-4e42-8375-764dab48f8b7)


## Day8

**Destructuring Assignment**
- Destructuring assignment is a feature in JavaScript that allows us to extract data from arrays, objects, or other iterable objects into distinct variables. It provides a concise syntax for breaking down the structure of an array or object and assigning its elements or properties to variables in a single step.


**Spread Operator**
- The spread operator allows an iterable, such as an array or a string, to be expanded or spread into individual elements. It can be used in various contexts, such as array literals, function calls, and object literals, to provide a more concise and flexible way of working with arrays and objects.

- Both features significantly enhance the readability and writability of JavaScript code, particularly when working with complex data structures like arrays and objects. They're widely used in modern JavaScript development.


![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/de72ff43-494d-4b5a-8037-e012e2546459)


## Day9 

**Here is my JS project in which I have created a login page with the validation property.**

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/186403f2-6546-46ec-ae7b-b22c9c2811ed)

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/ccb8ef41-cb2a-45df-acb3-e2bcd568d5bc)

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/b70a1872-0723-4b39-b582-b2bdd30b95ee)

![Output](https://github.com/anuska122/JAVASCRIPT/assets/154875734/1ab6c63e-0b2c-4580-9ff3-6331f8d7c883)


## Day10

**Today I have created a simple project using HTML, CSS And JavaScript.

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/d225457d-d4a8-44d9-97f4-f3e3188c1550)

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/bf9bb36b-176b-45c2-9e82-079d82656bc4)

![OutPut](https://github.com/anuska122/JAVASCRIPT/assets/154875734/d0f25429-eea1-4427-8a9d-0947ca17ee07)


## Day11

**Closures in JavaSript**
- In JavaScript, closure refers to the combination of a function and the lexical environment within which that function was declared. This allows the function to retain access to variables from its containing scope even after the parent function has finished executing. JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures. A closure is a function having access to the parent scope, even after the parent function has closed.

**Global Variable**
- A global variable in JavaScript is a variable that is declared outside of any function, meaning it is accessible from anywhere within the 
 script or program. Global variables are accessible to all functions, objects, and code blocks in a script. Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

**Local variable**
- A local variable in JavaScript is a variable that is declared within a function or block of code. Local variables are only accessible within 
 the function or block in which they are declared. They have a limited scope and are not accessible from outside the function or block.

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/fec6246f-965a-4b5d-a218-6fb136b2ee67)

![](https://github.com/anuska122/JAVASCRIPT/assets/154875734/f6fb98d8-0333-4ec0-9670-b8be6720d1c4)



























