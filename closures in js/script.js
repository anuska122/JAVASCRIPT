// variable defined inside the function
myFunction();

function myFunction(){
    let a = 8;

    document.getElementById("content").innerHTML = a*a;
}
// variable defined outside the function
let a = 4;
myFunction();

function myFunction() {
  document.getElementById("content").innerHTML = a * a;
} 

myFunction();
document.getElementById("content").innerHTML = x * x;

function myFunction(){
    x = 3;
}

// counting with global variable
let counter = 0;
function add(){
    counter += 1;
}
add();
add();
add();
add();
document.getElementById("content").innerHTML = "The counter is: " + counter;

// counting with local variable 

document.getElementById("content").innerHTML = add();
function add(){
    let counter = 0;
    function plus() {counter +=1};
    plus();
    return counter;
}

const add = (function (){
    let counter = 0;
    return function () {counter +=1;
    return counter;}
})();
function myFunction(){
document.getElementById("content").innerHTML = add();
}
