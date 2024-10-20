//for(初始動作; 條件; 結束動作)

/*let str = '';
for(let i=0; i<5; i++)
{
    console.log('hello');
    str+='A';
}
console.log(str);

/* console 1,4,7,11*/
/*for(let i=1;i<11;i+=3)
{
    console.log(i);
}*/

/* console 1,3,5,7,9,11*/
/*for(let i=1;i<12;i+=2)
{
    console.log(i);
}*/

/*Console 1,2,4,8,16,32,64*/
/*for(let i=1; i<100; i*=2)
{
    console.log(i)
}*/

/*99乘法表*/
let ans;
for(let i=1; i<10; i++)
{
    if(i>1)
    {
        console.log('----------------------');
    }
    for(let j=1; j<10; j++)
    {
        ans = i*j;
        console.log(i + "x" + j +"="+ ans);
    }
}
