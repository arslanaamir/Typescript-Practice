
const num = Number(prompt("Enter Number"))
let count = num;
let fictorial = num;
for (let i = num; i > 1 ; i--) {
    fictorial *= (count-1);
    count--;
}
console.log(fictorial)