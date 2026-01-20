let myleads = [];
const inputbtn=document.getElementById("input-btn");
const inputel=document.getElementById("input-el");
let ulEl = document.getElementById("ul-el"); 
inputbtn.addEventListener("click", function()
{
    myleads.push(inputel.value); 
}); 
for (let i=0; i<myleads.length; i++)
{
    ulEl.innerHTML += "<li>" + myleads[i] + "</li>";
}