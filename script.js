var main = document.querySelector("#main")
var mus = document.querySelector(".mousemove1")


main.addEventListener("mousemove",function(dets){
    mus.style.left = dets.x +"px"
    mus.style.top = dets.y +"px"
    
})