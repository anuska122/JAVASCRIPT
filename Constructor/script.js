class Rectangle{
    constructor(){
        this.name = 'Rectangle';
    }
}
let Rect1 = new Rectangle;
console.log(Rect1.name);

class Person{
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`Hello, My name is ${this.name}`);
    }
}
const John = new Person("John");
John.introduce();

class food{
    constructor(type){
        this.type = type;
    }
    define(){
        console.log(`My fav food is ${this.type}`); 
        // The ${this.type} syntax is used to insert the value of this.type into the string.
    }
}
const apple = new food("apple")
apple.define();
console.log(apple.type);

class Man{
    constructor(name = "John"){
        this.name = name;
    }
    introduce(){
        console.log(`Hello my name is ${this.name}`);
    }
}
const man = new Man();
man.introduce();

class Polygon{
    constructor(){
        this.name = "Polygon";
    }
}
class Rectangle{
    constructor(){
        this.name = "Rectangle";
    }
}
class Square extends Polygon{
    constructor(){
        super();
    }
}
Object.setPrototypeOf(Square, Rectangle);
const newInstance = new Square();
console.log(newInstance instanceof Polygon);
console.log(newInstance instanceof Rectangle);
console.log(newInstance.name);