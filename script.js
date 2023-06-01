


const user = {
    name: "Dima",
    surname: "Something",
    birthInfo: "dd/mm/yyyy"
}

console.log(user);

user.someThing = "someThing";
console.log(user); 

Object.preventExtensions(user);
user.someThingOne = "someThingOne";
console.log(user);