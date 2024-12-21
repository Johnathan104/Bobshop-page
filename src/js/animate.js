$(document).ready(function() {
    console.log("animate js ready")
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            console.log("yey")
            if(entry.isIntersecting){
                entry.target.classList.add("show")
            }else{
                entry.target.classList.remove("show")
            }
        })
    })
    const hiddenElements = document.querySelectorAll(".hidden")
    const masterElement = document.querySelectorAll(".hidden-head")
    const fadeElements = document.querySelectorAll(".hidden-fade")
    hiddenElements.forEach(element=>{
        observer.observe(element)
    })
    masterElement.forEach(element=>{
        observer.observe(element)
    })
    fadeElements.forEach(element=>{
        observer.observe(element)
    })
});
