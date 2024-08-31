const input = require("input");

/*one*/
/*
const num = Number(input.text("Enter Number"))
let count = num;
let fictorial = num;
for (let i = num; i > 1 ; i--) {
    fictorial *= (count-1);
    count--;
}
console.log(fictorial)



two
type employee ={
    firstName : string,
    salary : number,
    lastName : string
}
const employeeOne : employee = {
    firstName : "Ali",
    salary : 34000,
    lastName : "Raza"
}
const employeeTwo : employee = {
    firstName : "Umer",
    salary : 45000,
    lastName : "Farooq"
}
const employeeThree : employee = {
    firstName : "Faizan",
    salary : 36000,
    lastName : "Raza"
}
const employeeFour : employee = {
    firstName : "Talha",
    salary : 45000,
    lastName : "Farooq"
}
const employeeFive : employee = {
    firstName : "Zargham",
    salary : 40000,
    lastName : "Raza"
}
const employeeSix : employee = {
    firstName : "Ehtisham",
    salary : 49000,
    lastName : "Farooq"
}
const employeeSeven : employee = {
    firstName : "Arham",
    salary : 28000,
    lastName : "Ataf"
}
const employeeEight : employee = {
    firstName : "Hasan",
    salary : 37500,
    lastName : "Tahir"
}
const employeeNine : employee = {
    firstName : "Ahmed",
    salary : 37000,
    lastName : "Samee"
}
const employeeTen : employee = {
    firstName : "Bilal",
    salary : 43000,
    lastName : "Umer"
}
const calculateSalary  = async () => {
    const days = await input.text("Enter no of days you want to calculate your Salary")
    const calculatedSalary = ()=>{
        const newUser : employee[] = [employeeOne,employeeTwo,employeeThree,employeeFour,employeeFive,employeeSix,employeeSeven,employeeEight,employeeNine,employeeTen]
        console.log(newUser.map((obj)=>(obj.salary/30)*days))
        newUser.forEach((obj)=>{
           let salary =  Math.floor((obj.salary/30)*days)
           console.log(`Salary of Employee named as ${obj.firstName} and his salary is ${salary} of ${days} days`)
        })
    }
  calculatedSalary()
}
calculateSalary()



*/





/*

type userData = {
    userName : string,
    fatherName? : string
    age : number,
    isPakistani : boolean,
    contact : number,
    address? : string
}

const getUserInfo = async() =>{
    const user : userData {
    const userName = await input.text("Please Enter your Name"),
    const fatherName = await input.text("Please Enter your Father Name"),
    const age = await input.text("Please Enter your Age"),
    const isPakistani = await input.text("Are you Pakistani?"),
    const contact = await input.text("Please Enter your Contact no:"),
    const address = await input.text("Please Enter your Address")
    }
    
}
*/


const a :string[] =  ['23' , 'abc']
a.p  