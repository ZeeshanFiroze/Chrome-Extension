let myleads = [];
const inputbtn=document.getElementById("input-btn");
const inputel=document.getElementById("input-el");
let ulEl = document.getElementById("ul-el"); 
inputbtn.addEventListener("click", function()
{
    myleads.push(inputel.value); 
    inputel.value = "";
    renderleads();
})
let listitems = "";
function renderleads(){
for (let i=0; i<myleads.length ; i++) 
{
    listitems += "<li>" + myleads[i] + "</li>";
 } 
ulEl.innerHTML = listitems;
}