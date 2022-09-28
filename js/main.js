let nav=document.querySelector(".navbar")
let links=document.querySelectorAll(".navbar ul li a")
let link=document.querySelector(".navbar ul li .active")



setInterval(() => {
    if(scrollY>135){
        nav.style.backgroundColor="white"
        links.forEach(link=>{
            link.style.setProperty("color","black","important" )
        })
        link.style.setProperty("color","#ffc107","important" )
    }else{
        nav.style.backgroundColor="transparent"
        links.forEach(link=>{
            link.style.setProperty("color","white","important" )
        })
        link.style.setProperty("color","#ffc107","important" )
        
    }

});

//     console.log(scrollY)