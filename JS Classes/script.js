class Food {
    constructor(name, type) {
        this.name = name;
        this.year = type;
    }
}
const myFood1 = new Food("Apple", "Fruit");
const myFood2 = new Food("Potato", "Vegetable");

document.getElementById("content").innerHTML = myFood1.name + " " + myFood2.name;

class Book {
    constructor(name, year) {
        this.name = name;
    }
type() {
    const date = new Date();
    return date.getFullYear();
}
}
const myBook = new Book("Computer Science");
document.getElementById("content").innerHTML = "I want to study " + myBook.name + " in " +    myBook.type() + ".";

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(a) {
      return a - this.year;
    }
  }
  
  const date = new Date();
  let year = date.getFullYear();
  
  const myCar = new Car("Ford", 2014);
  document.getElementById("content").innerHTML=
  "My car is " + myCar.age(year) + " years old.";

// JS Inheritance

class country {
    constructor(name){
        this.countryname = name;
    }
    present(){
        return 'I live in ' + this.countryname;
    }
}
class city extends country {
    constructor(name, city){
    super(name);
    this.city = city;
    }
    show() {
        return this.present() + ', it is a beautiful country in ' + this.city + '.';
    }
}
const myCountry = new city("Kathmandu", "Nepal")
document.getElementById("content").innerHTML = myCountry.show();

// Getter and setter

class name1 {
    constructor(type){
        this.name = type;
    }
    get gname(){
        return this.name;
    }
    set sname(a){
        this.name = a;
    }
}
const myName = new name1 ("Anushka");
myName.name = "John";
document.getElementById("content").innerHTML = myName.name;

// class static
class name2 {
    constructor(greet){
        this.greet = greet;
    }
    static hello(x) {
        return " Hello " + x.greet;
    }
}
const myName2 = new name2("Anushka");
document.getElementById("content").innerHTML = name2.hello(myName2);