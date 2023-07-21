console.log("Testing 123");

let message;

message = "Hello World";
console.log(message);
//alert(message); //stops program until clicked through

let user = "John", age = 25;

console.log(user+" is "+age+" years old");

const dateOfBirth = "12.21.1900";

console.log(dateOfBirth);

const SPEED_OF_LIGHT = 299792458; //use caps for constants that are hard coded.

//https://javascript.info/variables Tasks

let admin;
let name = "John";
admin = name;

//alert(admin); 

const HOME_PLANET = "Earth";

let currentVisitorName;


//Odin Project Variable Tasks

console.log(37+53);

console.log((4+6+9) / 77);

let a = 10;
console.log(a);

const max = 57;
let actual = max-13;
let percentage = actual/max;
let remainder = actual%max;

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!";
  }
 
  console.log(favoriteAnimal('Goat'))

  let animalFavorite = (animal) => {
    return animal +" is my favorite animal!";
  }

  console.log(animalFavorite("Dog"));

  let add7 = (number) => {
    return number+7;
  }

  let multiply = (num1, num2) => {
    return num1*num2;
  }

  let capitalize = (string) => {
    let temp = string.toLowerCase();

    let firstLetter = temp.slice(0,1).toUpperCase();
    let endOfString = temp.slice(1);

    return firstLetter+endOfString;
  }

  let lastLetter = (string) => {
    return string.slice(string.length-1,string.length);
  }