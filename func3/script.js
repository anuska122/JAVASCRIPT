// The JavaScript apply() Method
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  document.getElementById("content").innerHTML = person.fullName.apply(person1); 

const person2 = {
    fullName: function(city, country)
    {
        return this.firstName + " " + this.lastName + " ," + city + "," + country;
    }
}
const person3 = {
    firstName: "Mary",
    lastName: "Doe"
}
document.getElementById("content").innerHTML = person2.fullName.apply(person3, ["Newyork", "United states"]);

// JavaScript Function bind()

const man = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = man.fullName.bind(member);
  
  document.getElementById("content").innerHTML = fullName();

const man2 = {
    firstName:"John",
    lastName: "Doe",
    display: function() {
      let x = document.getElementById("content");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  man2.display();