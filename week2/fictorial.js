var num = Number(prompt("Enter Number"));
var count = num;
var fictorial = num;
for (var i = num; i > 1; i--) {
    fictorial *= (count - 1);
    count--;
}
console.log(fictorial);
