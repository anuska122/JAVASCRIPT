// obj iterables
const name2 = "science";
let text2 = ""
for (const x of name2) {
    text2 += x + "<br>";
}
document.getElementById("content").innerHTML = text2;

const num = ["1", "2", "3"];
let text = ""
for (const x of num){
    text += x + "<br>";
}
console.log(num);

const letter = ["a", "b","c"];
let text3 = ""
for (const x of letter){
    text += x + "<br>";
}
console.log(letter);

// home made iterable
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }
//   it doesnot support for..of statement
  const n = myNumbers();
  n.next();
 n.next();

  document.getElementById("content").innerHTML = n.next().value;






  
  myNumbers = {};
  myNumbers[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
      next() {
        n += 10;
        if (n == 100) {done = true}
        return {value:n, done:done};
      }
    };
  }
  
  let text4 = ""
  for (const num of myNumbers) {
    text4 += num +"<br>"
  }
  
  document.getElementById("content").innerHTML = text4;

//   obj set
  const letters = new Set(["a","b","c"]);
document.getElementById("content").innerHTML = letters.size;

// obj maps
const fruits = new Map([
    ["apples", 800],
    ["bananas", 500],
    ["oranges", 200]
  ]);
  
  document.getElementById("content").innerHTML = fruits.get("apples");