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
function renderleads(){
    let listitems = "";
for (let i=0; i<myleads.length ; i++) 
{
    listitems += `
    <li>
       <a href="${myleads[i]} "  target='_blank'>
       ${myleads[i]}    
       </a>
       </li>
       `
 } 
ulEl.innerHTML = listitems;
}