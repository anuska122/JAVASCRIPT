function myFunction(a, b){
    return a*b;

}
document.getElementById("content").innerHTML = myFunction(3,6);

// invoking myFunction is same as invoking window.myFunction

function myFunction(x,y){
    return x + y;
}
document.getElementById("content").innerHTML = window.myFunction(4,5);

// Invoking a Function as a Method
const myObj = {
    firstName : "Anushka",
    lastName: "Hadkhale",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
document.getElementById("content").innerHTML = myObj.fullName();

// myFunction is a function constructor:

function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}
const myObj1 = new 
myFunction("JOHN", "DOE")
document.getElementById("content").innerHTML = myObj1.firstName + " " + myObj1.lastName

// JavaScript Function call()

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Anu",
    lastName: "Hadkhale"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
document.getElementById("content").innerHTML = person.fullName.call(person2);

