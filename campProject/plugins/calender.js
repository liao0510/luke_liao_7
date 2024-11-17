// fetch("http://127.0.0.1:5500/campProject/db.json",{method : "GET"},)
// .then(res=>res.json())
// .then(json=>{
//   console.log(json)
// })

const  init = async()=>{
  result = await fetch("http://127.0.0.1:5500/campProject/db.json",{method : "GET"},)

  try{
    resData = await result.json()
    const {booked, pallet, nationalHoliday} = resData
    console.log(booked)
    console.log(pallet)
    console.log(nationalHoliday)
    runCalendarService()
  }catch(err){
    console.log(err)
  }
}
const runCalendarService = ()=>{
  const theDay = dayjs()
  // const today = dayjs()
  calLeft = {
    title:"Left calendar",
    listBox:"",
    thisDate:theDay
  }
  calRight = {
    title:"Right calendar",
    listBox:"",
    thisDate:theDay.add(1,"month")
  }
  listMaker = (obj)=>{//調整物件返回修改後
    const firstDay = obj.thisDate.date(1).day();
    const today = obj.thisDate.date();
    const totalDay = obj.thisDate.daysInMonth()
    
    console.log(today)
    for(let i = 1;i<(firstDay || 7);i++){
      obj.listBox += `<li class="JsCal"></li>`
    }
    for(let i = 1;i<today;i++){
      obj.listBox += `<li class="delDay JsCal">${i}</li>`
    }
    for(let i = today;i<=totalDay;i++){
      obj.listBox += `<li class="emptyDay JsCal">${i}</li>`
    }
    AllMonth_tw = window.dayjs_locale_zh_tw.months
    obj.title = `${AllMonth_tw[obj.thisDate.month()]} ${obj.thisDate.year()}`
    return obj
    
  }
  listPrint = ()=>{
    
    document.querySelector(".leftDayList").innerHTML = listMaker(calLeft).listBox
    document.querySelector(".rightDayList").innerHTML = listMaker(calRight).listBox

    document.querySelector(".leftBar>h4").innerHTML = listMaker(calRight).title
    document.querySelector(".rightBar>h4").innerHTML = listMaker(calRight).title
    
    
  }
  listPrint()
  // console.log(calLeft)
  // console.log(calRight)
}
init()

