let lotter = []
let getBall = []

function rand(min,max){
  randomNum = Math.random()
  return Math.floor(randomNum*(max+1-min)+min)
}
function reset(){
  let num1 = Number(document.getElementById("lotteryMin").value)
  let num2 = Number(document.getElementById("lotteryMax").value)
  
  lotter = []
  getBall = []
  for (let i = num1;i<(num2-num1+3);i++) lotter.push(`(${i})`)
  let resultStr = document.getElementById("result")
  resultStr.innerText = ""
  console.clear()
  
  console.log(lotter)
}
function lottery(){
  
  let num1 = Number(document.getElementById("lotteryMin").value)
  let num2 = Number(document.getElementById("lotteryMax").value)
  let resultStr = document.getElementById("result")
  if (lotter.length <= 0){
    for (let i = num1;i<(num2-num1+1);i++) lotter.push(`(${i})`)
    getBall = []
    }
  
  let ran = rand(num1,num2-getBall.length-1)
  
  let findBall = lotter[ran-1]
  getBall.push(findBall)
  lotter = lotter.filter((value)=>!getBall.includes(value))//刪除抽中號碼
  resultStr.innerText = `獎池號碼:${lotter}\n`
  resultStr.innerText += `抽中號碼:${getBall}`
  console.log(`抽中號碼:${lotter}`)

}
var nowTime = null;
function date_control() {
  const now = Date()
  const time = new Date()
  const nextYear = time.getFullYear()
  const lastTime = new Date((nextYear+1)+"-01-01T00:00:00")
  // console.log(time.getFullYear())//取得當下年
  // console.log(time.getMonth()+1)//取得當下月
  // console.log(time.getDay()+1)//取得當下星期幾
  // console.log(time.getDate())//取得當下日
  // console.log(Math.floor(time.getTime()/1000))
  
  
  if (nowTime !=Math.floor((lastTime.getTime() - time.getTime())/1000)){
    nowTime = Math.floor((lastTime.getTime() - time.getTime())/1000)
    day = Math.floor(nowTime/86400)
    hour = Math.floor(nowTime%86400/3600)
    min = Math.floor(nowTime%3600/60)
    sec = nowTime%60
    console.clear()
    console.log(`跨年倒數 ${day}天${hour}:${min}:${sec}`)
  
  }
  setTimeout(()=>{
    date_control()
  },0)
}
  


