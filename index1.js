//Exercise 10

var cards1 = parseInt(prompt("Give a number"));
var cards2 = parseInt(prompt("Give a second number"));
var cards3 = parseInt(prompt("Give a third number"));


if (cards1 + cards2 + cards3 > 21)
{
   alert("BUST!");
}
else if (cards1 + cards2 + cards3 === 21)
{
         alert("BLACKJACK!");
}
else
{
       alert("Total")
}







//Exercise 11
  var userGrade = parseInt(prompt("Enter your Grade"));



//Exercise 12
var userAge = parseInt(prompt("What is your age?"));

 if (userAge <= 125)
{
    alert("REAL AGE");
}

if (userAge > 125)
{
    alert("NOT REAL AGE");
}


