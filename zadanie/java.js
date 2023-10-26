const close=document.querySelector(".close")
close.addEventListener("click",()=>
{
    console.log("test")
    document.querySelector(".menu").classList.add("hidden")
    document.querySelector(".rozwin").classList.remove("hidden")
})
const otworz=document.querySelector(".rozwin")
otworz.addEventListener("click",()=>
{
document.querySelector(".menu").classList.remove("hidden")
document.querySelector(".rozwin").classList.add("hidden")
})
