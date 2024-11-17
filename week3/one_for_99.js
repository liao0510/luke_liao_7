function length(value){
  return (Array(2).join(" ") + value).slice(-2)
}
function calculate_for(){
  return_str = ""
  for(i=1;i<10;i++){
    for(j=1;j<10;j++){
      return_str+=`${length(i)}*${length(j)} = ${length(i*j)}, `
    }return_str+="\n"
  }
  console.log(return_str)
}
function calculate_while(){
  return_str = ""
  i = 1
  
  while(i<10){
    j = 1
    while(j<10){
      return_str+=`${length(i)}*${length(j)} = ${length(i*j)}, `
      j++
    }return_str+="\n"
    i++
  }
  console.log(return_str)
}
function calculate_dowhile(){
  return_str = ""
  i = 1
  
  do{
    console.log(i)
    i++
  }while(i<10)
  console.log(return_str)
}
function array(){
  let ary1 = [1,2,3,4,5]
  let ary2 = ["A","B","C"]
  bigAry = [[...ary1],[...ary2]]
  console.log(bigAry)
  bigAry.forEach(value=>{
    console.log(value)
  })
  
}
function showValue(value,idx){
  console.log(value)
}
function arrow(){
  
  ary1 = [1,2,3,4,5]
  //method1
  ary1.forEach(showValue)
  //method2
  ary1.forEach(function (val, idx){
    console.log(val)
  })
  //method3
  ary1.forEach((val,idx)=>{
    console.log(val)
  })
}
function filter(){
  ary1 = [1,2,3,4,5,6,7,8,9]
  const result = ary1.filter((val)=>{
    return val>6
  })
  console.log(result)
}
function map(){
  ary1 = [1,2,3,4,5,6,7,8,9]
  ary2 = ary1.map((val)=>val+=1)
}
function object(){
  obj1 = {
    name:"luke",
    age:23,
    grader:"male",
    alive:true,
    say: ()=>console.log("time waits for no one")
  }
  console.log(obj1)
  console.log(Object.keys(obj1))
  console.log(Object.values(obj1))
  console.log(obj1.name)
  console.log(obj1.say)
  obj2 = obj1
  //解構
  
  obj2 = {...obj1}
  obj1.name = 'james'
  console.log(obj2)
}
function test(){
  strNum = "100"
  realNum = 100
  if (typeof(strNum) == "string") strNum = +strNum
  console.log(realNum+strNum)
}
function random_num(min,max){
  randomNum = Math.random()
  return Math.floor(randomNum*(max+1-min)+min)
}
function math(){
  console.log("round:"+Math.round(3.56))//四捨五入
  console.log("ceil:"+Math.round(3.2))//無條件進位
  console.log("floor:"+Math.floor(3.9))//無條件捨去
  randomNum = Math.random()

  result = "random 45-80:"+Math.floor((randomNum)*36+45)
  console.log(result)
  result = "random 1-49:"+Math.floor(randomNum*49+1)
  console.log(result)
  obj = {
    1:0,
    2:0,
    3:0
  }
  for(i = 0;i<1000;i++){
    num = random_num(1,9)
    if(obj[num]){
      obj[num]+=1
    }else {
      obj[num] = 1
    }
    

  }
  
  console.log(obj)
  ary1 = new Array(10)
  ary2 = Array.apply(null,new Array(10)).map(val=>random_num(0,10))
  for (i = 0;i<ary1.length;i++){
    ary1[i] = random_num(0,10)
  }
  console.log(ary2)
}