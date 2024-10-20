let a = 100;
/* ...經過好多行...*/
//let a = 'A'; //Error, 可以保護變數不會重複宣告
//a='a'; /*但是可以重新賦值*/
a+=100;
console.log(a);

/*在區塊作用域底下可獨立宣告 */
if(true)
{
    let a = 'A', b = 'B';
    console.log(a,b);
}
// console.log(a,b);
console.clear();

////const////
const c = 100; //宣告一個常數，不可變化且常駐的數
//let c; //Error, 不可重複宣告
//c='C'; //Error,不可改值

if(true)
{
    const c = 'C'; //{}常數，不會使用到外面的c
    console.log(c);
}
console.clear();

/*null vs undefined*/
let aa = null; //塞一個值為"沒有東西的object"，有賦值(值為null)
let bb; //undefined: 沒賦值給他
let cc = ''; //string，空字串
let dd = 5 * 'A'; //nymber，NaN為非數字Not a number

/*Check data type command: typeof*/