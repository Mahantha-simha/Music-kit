function add(num1,num2)
{
  alert(num1+num2);
}
function multi(num1,num2)
{
    alert(num1*num2);
}

function calcu(num1,num2,operator)
{
    alert (operator(num1,num2));
}

calcu(num1=prompt(" num1"),num2=prompt("num2"),operator=prompt("add or multi"));