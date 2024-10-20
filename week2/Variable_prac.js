// a=100; /*Wrong method*/
var b = 200; /*Declare variable*/
var c; /*Result = undefined*/

function TestVar1()
{
    console.log(b);
}

function TestVar2()
{
    var b= 100;
    console.log(b);
}
//TestVar1();

console.log('b=',b);
TestVar2();
console.log('b=',b);

///////Advanced practice //////
if(true)
{
    var e = 100; //var缺點: 可以重新被定義
    console.log(e);
}
console.log(e);
