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