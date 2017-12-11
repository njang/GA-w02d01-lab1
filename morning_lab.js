
// Syntax
// {} 	curly braces define the object.
// : 	colon coupless key and its associated value.
// , 	comma separates lines, instead of semicolon.

// Me
const me = {
	name: "William Wallace",
	age: "32",
	email: "william.wallace@freedom.com"
}

console.log(me.name);
me.age = 1000;
console.log(me.age);
me["place of residence"] = "Scotland";
console.log(me["place of residence"]);

// Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

// What would you write to access the name and console.log it?
console.log(monster.name);

// What would you write to change the type to 'creature' (without changing it inside the object)
monster.type = 'creature';

// What would you write to add a key to the object called age, and set the age to 6?
monster.age = 6;

// console.log the object to make sure type is creature, and age is 6
console.log(monster);