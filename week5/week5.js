function test() {
  console.log("test")
}
function showalert() {
  alert("按啥呢??")
}
function whatIs() {
  var Loki = document.getElementById("loki")
  var lokiNum = parseInt(Loki.innerText)
  console.log(typeof (lokiNum))
  Loki.innerText = lokiNum + 1

  Loki.classList.add("active")
  console.log(Loki)
}
function clearpassword(obj) {
  if (obj.value == "password") {
    obj.value = ""
  }
}
function passCheck(obj) {
  document.querySelector("#checkPasswordResult").innerText = ""
  if (obj.value.length < 8) {
    document.querySelector("#checkPasswordResult").innerText = "密碼安全性過低"
    document.querySelector("#checkPasswordResult").style.color = "red"
  }
  // document.getElementById("checkPasswordResult").innerText = "密碼安全性過低"

}
document.onkeydown = function (value) {
  // value.preventDefault();//取消掉原本按鍵要做的事件
  document.querySelector("#keycode").innerText = value.keyCode
  console.log(value.key)
}
document.onclick = function () {
  console.log("你按了左鍵")
}
//右鍵事件
document.oncontextmenu = function (value) {
  // value.preventDefault();//取消掉原本按鍵要做的事件
  console.log("你按了右鍵")
}
document.onresize = function () {
  console.log("你滾了滾輪")
}
var btn = document.querySelector("#clickbutton")
todo1 = function () {
  console.log("click")
}
btn.addEventListener("click", todo1)
todo2 = function () {
  console.log("取消事件")
  btn.removeEventListener("click", todo1)
}
function clearListener() {

  var ock = document.querySelector("#clearOck")
  ock.addEventListener("click", todo2)
}
clearListener()
var pass = document.querySelector("#password")
var passSitch = document.querySelector("#view")
passSitch.addEventListener("mousedown", function () {
  console.log("show")
  pass.type = "text";
})
passSitch.addEventListener("mouseup", function () {
  console.log("hide")
  pass.type = "password";
})
var addChild = document.querySelector("#addChild")
addChild.addEventListener("click", () => {
  var group = document.querySelector("#group")
  var btn = document.createElement("button")
  btn.textContent = "按鈕"
  document.body.append(btn)
})
var shape = document.querySelector("#shape")
var color = document.querySelector("#colorChange")
var selectColor = shape.style.backgroundColor;
color.addEventListener("input", () => {
  selectColor = color.value

})
function changeColor(value) {
  console.log(value)
  switch (value) {
    case "方形":
      shape.style = ` background-color: ${selectColor};
                    width: 100px;
                    height: 100px;`
      break;
    case "圓形":
      shape.style = ` background-color: ${selectColor};
                      width: 100px;
                      height: 100px;
                      border-radius: 50px;`
      break;
    case "三角形":
      shape.style = ` width: 0;
                      height: 0;
                      border-left: 50px solid transparent;
                      border-right: 50px solid transparent;
                      border-bottom: 100px solid ${selectColor};`
      break;
  }
}
var colorDiv = document.querySelector("#changeColor")
colorDiv.querySelectorAll('input[type=button]').forEach(item => {
  item.addEventListener("click", () => {
    changeColor(item.value)
  })
})

