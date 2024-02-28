// // Function Declaration
let a1 = myFunction(4, 3);
document.getElementById("content").innerHTML= a1;
function myFunction(a1, b){
    return a1 + b;
}
const myFunction = new Function("a", "b", "return a * b");
document.getElementById("content").innerHTML = myFunction(4, 3);

// Function can be invoked automatically without being called
// Function without name
(function (){
    document.getElementById("content").innerHTML = "Hello! My name is Anushka"
})();

// Function can be used as a value
function myFunction(a, b){
    return a - b;
} 
let c = myFunction(8, 4)
    document.getElementById("content").innerHTML = c;

    // Function are objects
    function myFunction(a, b){
        return arguments.length;
    }
    document.getElementById("content").innerHTML = myFunction(2, 1);

    // Arrow Function
    let a = (a, b) => a * b;
    document.getElementById("content").innerHTML = a(4, 4);

    // Function Parameters and argument
    function myFunction(x, y){
        if(y === undefined) {
            y=2;
        }
        return x * y;
    }
    document.getElementById("content").innerHTML = myFunction(2)

    function sum(...args) {
        let sum = 0;
        for(let arg of args) sum += arg;
        return sum;
    }
    let x = sum(4,6, 7, 9, 34, 87);
    document.getElementById("content").innerHTML = x;

    function findMax() {
        let max = -Infinity;
        for(let i = 0; i < arguments.length; i++) {
          if (arguments[i] > max) {
            max = arguments[i];
          }
        }
        return max;
      } 
      document.getElementById("content").innerHTML = findMax(4, 5, 6);

      function sumAll(){
        let sum = 0;
        for(let i = 0; i< arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
      }
      document.getElementById("content").innerHTML = sumAll(1, 12, 123, 1234);