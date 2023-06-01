


const user = {
    name: "Dima",
    surname: "Something",
    birthInfo: "dd/mm/yyyy"
}


/*

console.log(user);

user.someThing = "someThing";
console.log(user); 

Object.preventExtensions(user);
user.someThingOne = "someThingOne";
console.log(user);

*/

/* Method Object.seal();

//console.log(Object.getOwnPropertyDescriptor(user, "name"));
//Object.seal(user);
//console.log(Object.getOwnPropertyDescriptor(user, "name"));


*/

/* Method Object.freeze();

console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.freeze(user);
console.log(Object.getOwnPropertyDescriptor(user, "name"));

*/

//console.log(Object.isExtensible(user));

/* Method Object.is();

const user2 = {
    name: "someName",
    surname: "Something",
    birthInfo: "dd/mm/yyyy"
}

console.log(Object.is(user.name, user2.name));

*/

//console.log(Object.keys(user));
//console.log(Object.values(user));
console.log(Object.entries(user));
