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