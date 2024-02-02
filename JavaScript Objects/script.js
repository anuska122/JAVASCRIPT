
let person2 = {
    firstName: "Anushka",
    age: 19,
    eyeColor: "brown"
};
document.getElementById("content").innerHTML = person2.firstName + " " + person2.age + person2.eyeColor;
console.log(person2);

const student = {
    firstName: "Anushka",
    Major: "Computer Science",
    age: 19

}
console.log(student);

// creating js object using object literal

const person3 = {
    firstName: "Anushka",
    Major: "Computer Science",
    age: 19
}
document.getElementById("content").innerHTML = person3.firstName + " is " + person3.age + " years old " + " and " + person3.firstName + " study " + person3.Major;

// using javascript Keyword new
const person = new Object();
person.firstName = "Anushka";
person.Major = "Computer Science";
person.age = 19;

document.getElementById("content").innerHTML = person.firstName + " is " + person.age + " years old " + " and " + person.firstName + " study " + person.Major;

const person4 = {
    firstName: "John",
    age: 50,
    eyeColor: "blue"
}

const x = person4;
x.age = 10;
document.getElementById("content").innerHTML =
    person4.firstName + " is " + person4.age + " years old.";

// JS Object Properties

const man = {
    firstname: "John",
    age: 51,
    eyecolor: "blue"
};
//   using this syntax ; man["firstname"] + " is " + man["age"] + " years old.";
document.getElementById("content").innerHTML = man["firstname"] + " is " + man["age"] + " years old.";

// Js for in loop
const movie = {
    name: "inception",
    Director: "christopher Nolan",
    Actor: "Leonardo DiCaprio"
};

let txt = "";
for (let x in movie) {
    txt += movie[x] + " ";
}

document.getElementById("content").innerHTML = txt;

// Deleting
const man2 = {
    firstname: "John",
    age: 51,
    eyecolor: "blue"
};

delete man2.age;

document.getElementById("content").innerHTML = man2.firstname + " is " + man2.age + " years old.";

// Nested object
const myObj = {
    name: "John",
    age: 30,
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "mercedes"
    }
  }
  document.getElementById("content").innerHTML = myObj.cars.car3;

  let p1 = "cars";
let p2 = "car2";
document.getElementById("content").innerHTML = myObj[p1][p2];

// Js Nested obj and arrays
let a = " ";
const Obj = {
    name: "Anushka",
    age: 19,
    cars: [
        {name:"Ford", models: ["Fiesta","Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda" ]}
    ]
}
for (let i in Obj.cars) {
    a +=  Obj.cars[i].name;
    for (let j in
        Obj.cars[i].models) {
            a += Obj.cars[i].models[j] + "<br>";
        } 
}
document.getElementById("content").innerHTML = a;