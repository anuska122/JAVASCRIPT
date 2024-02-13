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













