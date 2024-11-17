time_set = 60
nowTime = time_set
score = 0
let timeShow = document.querySelector("#time")
let comboShow = document.querySelector("#combo")
let dogBtn = document.querySelectorAll(".cell")
var start_btn = document.querySelector("#start_btn")

function getCombo(num) {
  clearTimeout(setGroup[num-1])
  console.log(setGroup[num-1])
  if (dogBtn[num-1].classList.contains("red")){
    
    
    dogBtn[num-1].src="img/on.png"
    dogBtn[num-1].classList.remove("red")
    dogBtn[num-1].classList.add("green")
    score+=1
    comboShow.textContent=`成績分數:${score}`
    setTimeout(() => {
      if (dogBtn[num-1].classList.contains("green")){
        PicYellow(num-1)
      }
      
    }, 500);
  }
  
}
function random_num(min,max){
  randomNum = Math.random()
  return Math.floor(randomNum*(max+1-min)+min)
}
var setGroup = {}
function PicRed(Obj) {
  num = Obj.atSpace
  if (dogBtn[num].classList.contains("red")){
    setTimeout(()=>{
      Obj.atSpace = random_num(0,8)
      PicRed(Obj)
    },100)
    
  }
  else{
    dogBtn[num].classList.remove("green")
    dogBtn[num].classList.add("red")
    dogBtn[num].src="img/off.png"
    // console.log(setGroup[0]!=null,setGroup[0])
    clearTimeout(setGroup[num]);
    setGroup[num] = setTimeout(() => {
      PicYellow(num)
    }, Obj.atShow*1000);
  }
  
}
function PicYellow(num) {
  dogBtn[num].classList.remove("green")
  dogBtn[num].classList.remove("red")
  dogBtn[num].src="img/state.png"
}
function time_refresh(){
  
  if (nowTime>0){
    nowTime-=1
    timeShow.textContent = `剩餘時間:${nowTime}s`
    
  }
  else{remove()}
  

}
var startInterval = null
const start = ()=> {
  
  start_btn.removeEventListener("click",start)
  startInterval = setInterval(()=>{
    time_refresh()
  },1000)
  for(let i = 0;i<100;i++){
    const showObj = {
      atSpace:random_num(0,8),
      atTime:random_num(0,56000),
      atShow:random_num(2,4)
    }
    setTimeout(()=>{
      PicRed(showObj)
    },showObj.atTime)
    
  }
  
}
function remove(){
  start_btn.addEventListener("click",start)
  clearInterval(startInterval);
  score = 0
  nowTime = time_set
  dogBtn.forEach(element => {
    console.log(element.src)
    element.src="img/state.png"
    element.classList.remove("red")
    element.classList.remove("green")
  });

}
remove()
document.onkeydown = function (value) {
  
  switch(value.key){
    case "1":
      getCombo(7); 
      break;
    case "2":
      getCombo(8); 
      break;
    case "3":
      getCombo(9); 
      break;
    case "4":
      getCombo(4); 
      break;
    case "5":
      getCombo(5); 
      break;
    case "6":
      getCombo(6); 
      break;
    case "7":
      getCombo(1); 
      break;
    case "8":
      getCombo(2); 
      break;
    case "9":
      getCombo(3); 
      break;
  }
  
}


