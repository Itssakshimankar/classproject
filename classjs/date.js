let today=  new Date()
console.log(today);

let day=today.getDay();
console.log(day)

let year=today.getFullYear();
console.log(year)

let date=today.getDate();
console.log(date)

let month=today.getMonth();
console.log(month)

let mont=today.getMonth();  // beause i we want the month that time index is start from 0 that we have to add 1
console.log(mont);



let fulldate = day + "/" + month + "/" + year;
console.log(fulldate); 


const datePattern = /^(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[0-2])(\/|-)(19|20)\d{2}$/;

const testDates = [
    "31/12/2023",
    "01-01-1999",
    "15/05/2000",
    "07-07-2021",
    "32/01/2020",  // Invalid date
    "15/13/2020",  // Invalid month
    "15-05-1899"   // Invalid year
];

testDates.forEach(date => {
    console.log(`${date} matches: `, datePattern.test(date));
});



 

 


