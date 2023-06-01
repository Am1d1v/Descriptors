


const user = {
    name: "Dima",
    surname: "Something",
    birthInfo: "dd/mm/yyyy",
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

//Object.defineProperty(user, "birthInfo", {writable: false});
Object.defineProperty(user, "birthDay", {value: prompt("Day of your Birth") ,enumerable: true, configurable: true});
//console.log(Object.getOwnPropertyDescriptor(user, "birthDay"));

/*

for ( let key in user){
    //console.log(key);
    console.log(`Property ${key} has value ${user[key]}`);
}

*/


/*

Object.defineProperty(user, "showMyPublicData", {enumerable: false}); // Property "showMyPublicData" now is hidden

for ( let key in user){
    //console.log(key);
    console.log(`Property ${key} has value ${user[key]}`);
}

*/

//console.log(Object.getOwnPropertyDescriptor(Math, "PI"));


Object.defineProperties(user, {
    name: {writable: false},
    surname:{value: prompt("Your Surname")}
});

console.log(user);



//console.log(Object.getOwnPropertyDescriptor(user, "name"));

//user.name = "someName";
//console.log(Object.getOwnPropertyDescriptor(user, "name"));
//Object.defineProperty(user, "name", {writable: false});

//user.name = "someName";
//console.log(Object.getOwnPropertyDescriptor(user, "name"));
//Object.defineProperty(user, "gender", {value: "male"});
//console.log(Object.getOwnPropertyDescriptor(user, "gender")); 