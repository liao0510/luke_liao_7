// a=150;
// if(a > 200)
// {
//     console.log('超過200');
// }
// else if(a>100)
// {
//     console.log('超過100');
// }
// else
// {
//     console.log('100以下');
// }
// console.log('Done!!');
// console.clear();

// if(true)
//    console.log('if & else 後面只能接一個指令');

// if(true) //if & else超過一個指令就要包成一包(大括號)
// {
//     console.log('a');
//     console.log('b');
//     console.log('c');
// }

const 
  height = 160,
  face = false,
  cash = 100000;

/*if(height > 180 && face && cash > 10000)
{
    console.log('Good rich man');
}
else
{
    console.log('Go to hell');
}*/

if(cash > 10000)
{
    if((height > 180) || (face))
        console.log('Good rich man');
    else
        console.log('Put into condidate list');
}
else
{
    console.log('Go to hell');
}

//if((height > 180 || face) && (cash > 10000))
if((cash > 10000) && (height > 180 || face)) //Bestcase效能最佳解
{
    console.log('Good rich man');
}
else
{
    console.log('Go to hell');
}
console.clear();

//三元運算子
let day = 6; /*1~7*/
let msg = day > 5 ? 'Hoilday': 'Workday';
//msg = day > 5 ? (msg = 'Hoilday'): (msg = 'Workday');
console.log(msg);
