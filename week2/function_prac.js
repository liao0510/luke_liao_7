//function function_name(Parameter)
function hello(name = 'undefined') // 'nobody' = default value
//function hello(name)
{
    // if(name == undefined)
    // {
    //     console.log("Today is hoilday, nobody come to class~");
    // }
    // else
    // {
        console.log(`Hello ,${name}!!`);
    // }
}

//Call function
hello('Alvin');
hello('Van');
hello();

console.clear();

// word = function() //Anonymous Function匿名函式，沒名的function
// {
//     console.log('This is word Anonymous Function');
// }

varHello1 = function(name)
{
    console.log(`Hello ${name}!!`);
}

say1 = function (name)
{
    str = 'hello'+name;
    return str;
    console.log('func done'); //Return 之後程式碼不執行
}
ans = say1('Alvin');
console.log(ans);

say2 = function (name)
{
    return 'hello'+name;
    console.log('func done'); //Return 之後程式碼不執行
}
console.log(say2('Alvin'));
