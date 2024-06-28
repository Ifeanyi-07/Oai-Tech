let header= document.querySelector(".header")
let header2= document.querySelector(".header2")
let section1= document.getElementById("sec1")
let section2= document.getElementById("sec2")
let section3= document.getElementById("sec3")
let section4= document.getElementById("sec4")
let sectbtns= document.querySelector(".controls")
let sectbtn1= document.querySelector(".control-1")
let sectbtn2= document.querySelector(".control-2")
let sectbtn3= document.querySelector(".control-3")
let sectbtn4= document.querySelector(".control-4")
let sectbtn5= document.querySelector(".control-5")
let colorbtn= document.querySelector(".color-btn")
let body= document.getElementById("body")


colorbtn.addEventListener("click", function(){
    body.style.background="cornflowerblue"
    
})


sectbtn1.addEventListener("click",function(){
    sectbtn1.style.background="green"
    sectbtn2.style.background="grey"
    sectbtn3.style.background="grey"
    sectbtn4.style.background="grey"
    sectbtn5.style.background="grey"
    header.style.display="block"
    section2.style.display="none"
    section3.style.display="none"
    section4.style.display="none"
    section1.style.display="none"
    header2.style.display="block"
    body.style.background="black"
})

sectbtn2.addEventListener("click",function(){
    sectbtn2.style.background="green"
    sectbtn1.style.background="grey"
    sectbtn3.style.background="grey"
    sectbtn4.style.background="grey"
    sectbtn5.style.background="grey"
    section1.style.display="block"
    section2.style.display="none"
    section3.style.display="none"
    section4.style.display="none"
    header.style.display="none"
    body.style.background="black"
})

sectbtn3.addEventListener("click",function(){
    sectbtn3.style.background="green"
    sectbtn1.style.background="grey"
    sectbtn2.style.background="grey"
    sectbtn4.style.background="grey"
    sectbtn5.style.background="grey"
    section2.style.display="block"
    section1.style.display="none"
    section3.style.display="none"
    section4.style.display="none"
    header.style.display="none"
    body.style.background="black"
    

})

sectbtn4.addEventListener("click",function(){
    sectbtn4.style.background="green"
    sectbtn1.style.background="grey"
    sectbtn2.style.background="grey"
    sectbtn3.style.background="grey"
    sectbtn5.style.background="grey"
    section3.style.display="block"
    section1.style.display="none"
    section2.style.display="none"
    section4.style.display="none"
    header.style.display="none"
    body.style.background="black"
})

sectbtn5.addEventListener("click",function(){
    sectbtn5.style.background="green"
    sectbtn1.style.background="grey"
    sectbtn2.style.background="grey"
    sectbtn3.style.background="grey"
    sectbtn4.style.background="grey"
    section4.style.display="block"
    section1.style.display="none"
    section2.style.display="none"
    section3.style.display="none"
    header.style.display="none"
    body.style.background="black"
})

