//function hiển thị số
function button(val) 
{ 
    document.getElementById("result").value+=val 
} 
  
//function đánh giá chữ số và trả về kết quả
function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
  
//dong này làm clear máy tính
function clr() 
{ 
    document.getElementById("result").value = "" 
} 