const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("totalcounter");
const remainingEl = document.getElementById("remaining");

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
    
    })

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute("MaxLength") - textareaEl.value.length;
}

updateCounter();