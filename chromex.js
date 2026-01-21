let myleads = ["111","222","333"];
const inputbtn=document.getElementById("input-btn");
const inputel=document.getElementById("input-el");
let ulEl = document.getElementById("ul-el"); 
inputbtn.addEventListener("click", function()
{
    myleads.push(inputel.value); 
})
let listitems = "";
for (let i=0; i<myleads.length+1; i++) 
{
    listitems += "<li>" + myleads[i] + "</li>";
 }
ulEl.innerHTML = listitems;