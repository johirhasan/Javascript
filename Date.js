let date = new Date()   // create a date object

// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toString());
// console.log(typeof date);

let createDate = new Date (2023, 0, 5, 3, 12 ) // When time declared in array system then 0 month indicates january.
let dates = new Date ("01-12-2024") // when indicates in quation then month starts with as usual.

console.log(dates.toLocaleDateString());
console.log(createDate.toLocaleString());// to show time also after date

console.log(dates.getMonth()+ 1);// +1 beacause of solving the problem of understanding the count of month for a user.
let newdates =new Date()
newdates.toLocaleString('default',
    {
        weekday: "long"
    }
)//customizable way to view specific date system.