const darkButton = document.querySelector("input")
const cards = document.querySelectorAll(".card")
const background = document.querySelector(".background")
const backgroundStripe = document.querySelector(".background-stripe")
const text = document.querySelectorAll(".word")
const knob = document.getElementById("toggle-knob")

let toggle = 0

console.log(darkButton)

darkButton.addEventListener("click", ()=> {
    if(toggle === 0){
        toggle = 1
        cards.forEach(card => {
            card.classList.remove("bg-card-light")
            card.classList.add("bg-card-dark")
            card.classList.remove("hover:bg-[#eceef9]")
            card.classList.add("hover:bg-[#333A56]")
        });
        text.forEach(txt => {
            txt.classList.add("text-white")
        });
        background.classList.add("bg-dark-bg")
        backgroundStripe.classList.remove("bg-[#f5f7ff]")
        backgroundStripe.classList.add("bg-top-bg")
        knob.classList.remove("bg-white")
        knob.classList.add("bg-dark-bg")
    }else if(toggle === 1){
        toggle = 0
        cards.forEach(card => {
            card.classList.add("bg-card-light")
            card.classList.remove("bg-card-dark")
            card.classList.add("hover:bg-[#eceef9]")
            card.classList.remove("hover:bg-[#333A56]")
        });
        text.forEach(txt => {
            txt.classList.remove("text-white")
        });
        background.classList.remove("bg-dark-bg")
        backgroundStripe.classList.add("bg-[#f5f7ff]")
        backgroundStripe.classList.remove("bg-top-bg")
        knob.classList.add("bg-white")
        knob.classList.remove("bg-dark-bg")
    }
    
})