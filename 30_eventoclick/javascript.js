//EVENTO CLICK
var btn = document.querySelector('#div1')
var btn2 = document.querySelector('#div2')

console.log(btn)

btn.addEventListener("click", function(){
    if(btn.style.backgroundColor === "lightcoral")
        {btn.style.backgroundColor= "green"}
    else
        { btn.style.backgroundColor = "lightcoral"};
})


//CLICK DUPLO

btn.addEventListener("dblclick", function(){
    btn.style.cssText = "background-color:black; color:yellow;"
    
})


// MOUSEOVER
btn2.addEventListener("mouseover", function(){
    btn2.style.cssText= "border-radius:50%; color:white; transition-duration:2s; background-color: black;"
})

//MOUSEOUT
btn2.addEventListener("mouseout", function(){
    btn2.style.cssText = "color:lightcoral; border-radius:none; color:black;"
})