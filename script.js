const elTextarea = document.getElementById("textarea");

const elTotalCount = document.getElementById("total-count");
const elRemainingCounter = document.getElementById("remaining-count");

elTextarea.addEventListener("keyup", ()=>{
    updateCounter();
});
updateCounter();

function updateCounter(){
    elTotalCount.innerText = elTextarea.value.lenght;
    elRemainingCounter.innerText = elTextarea.getAttribute("maxLength") - elTextarea.value.lenght;
}