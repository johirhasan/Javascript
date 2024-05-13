// Stack memory(Primitive data type used),Heap memory(non-Primitive data type used)

let myPhnNo ="01719957699"

let anotherNo = myPhnNo
anotherNo = "01865826048"
console.log(myPhnNo);
console.log(anotherNo);

// Example of heap
let profile ={
    name:"jahir",
    age:"31"
}

let user =profile
user.age="22"

console.log(profile.age);
console.log(user.age);