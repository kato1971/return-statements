const check = function(number) {
    if (number > 100) return true;
    else return false;
}
console.log(check(120));
console.log(check(45));

function bouncer (amount, age){
    if (amount >= 75) return "it's too busy now, come back later";
    if (age < 18) return "this club is for adults";
    else return "come in";

}
console.log(bouncer(75, 18));
console.log(bouncer(60, 16));
console.log(bouncer(50, 32));


function calculateAverage(number1, number2, number3, number4, number5) {
    return Math.round((number1+number2+number3+number4+number5)/5);
}
console.log(calculateAverage(3,8,4,7,9));