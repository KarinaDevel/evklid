const search = document.querySelector(".search")
const searchBtn = document.querySelector(".header__search")
const clear = document.querySelector(".search__clear")
searchBtn.addEventListener("click", ()=>{
    search.classList.add("open") 
    searchBtn.classList.add("open")
    clear.classList.add("open")
})
clear.addEventListener("click", ()=>{
    search.classList.remove("open") 
    searchBtn.classList.remove("open")
    clear.classList.remove("open")
    document.getElementById("input").value = ""
})


var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay: 3000,
    },
    loop: true,
    effect:'cube',
    cubeEffect:{
      shadow: false,
      slideShadows: false,
    }
  });