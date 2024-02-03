//  JS Method "This" keyword
const person = {
    firstName: "Anushka",
    age: 19,
    id: 5522,
    fullName: function () {
        return this.firstName + " " + this.age;
    }
};
document.getElementById("content").innerHTML = person.fullName();

//   using built in methods
let message = "Good night";
let a = message.toUpperCase();
document.getElementById("content").innerHTML = message.toUpperCase();
console.log(message.toUpperCase());

// displaying JS Object

// on string
const person2 = {
    name: "John",
    age: 30,
    city: "New York"
};
document.getElementById("content").innerHTML = person2.name + ", " + person2.age + ", " + person2.city;

// on loop
const man = {
    name: "george",
    age: 40,
    city: "New york"
};
let loop = " ";
for (let a in man) {
    loop += man[a] + " ";
    // person.a will not work (Because 'a'is a variable).
};






document.getElementById("content").innerHTML = loop
// using object.value
const person3 = {
    name: "Aashika",
    age: 30,
    country: "Nepal"
};
document.getElementById("content").innerHTML = Object.values(person3);
const person4 = {
    name: "Anu",
    age: 30,
    country: "Nepal",
    today: new Date()
};
document.getElementById("content").innerHTML = JSON.stringify(person4);

const man2 = {
    name: "boy",
    age: function () { return 30; },
    country: "USA",
};
man2.age = man2.age.toString();
document.getElementById("content").innerHTML = JSON.stringify(man2);


const arr = ["John", "Peter", "Sally", "Jane"];
document.getElementById("content").innerHTML = JSON.stringify(arr);

// JS obj accessors(Getters and Setters)

const person5 = {
    firstName: "John",
    age: 20,
    language: "en",
    get lang() {
        return this.language.toUpperCase();
    }
};
console.log(person5);
// Displaying data from the object using a getter:
document.getElementById("content").innerHTML = person5.lang;


const man3 = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(lang) {
        this.language = lang;
    }
};
// property using set:
man3.lang = "en";
document.getElementById("content").innerHTML = man3.language;

// Object.defineProperty
const obj = { counter: 0};
Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0; }
});
Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
  });
Object.defineProperty(obj, "decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) { this.counter -= value; }
});
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("content").innerHTML = obj.counter;

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  Person.prototype.nationality = "English";
  const myFriend1 = new Person("John", "Doe", 50, "blue");
  const myFriend2 = new Person("Sally", "Rally", 48, "green");
  
  document.getElementById("content").innerHTML =
  "My Friend1 is " + myFriend1.age + ". My Friend2 is " + myFriend2.age + " and" + " MyFriend1 is " + myFriend1.nationality; 