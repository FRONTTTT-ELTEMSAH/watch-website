let darkmoon = document.querySelector("#dark-moon")

darkmoon.onclick = () => {
    if(darkmoon.classList.contains("bx-moon")){
         darkmoon.classList.replace("bx-moon","bx-sun");
         document.body.classList.add("color");
    }else{
        darkmoon.classList.replace("bx-sun","bx-moon");
        document.body.classList.remove("color")
    }
   
}
