let myleads = [];
const inputbtn=document.getElementById("input-btn");
const inputel=document.getElementById("input-el");
let ulEl = document.getElementById("ul-el"); 
const leadsfromlocalstorage = JSON.parse( localStorage.getItem("myleads") );
if (leadsfromlocalstorage){
 myleads = leadsfromlocalstorage;
render(myleads);
}
inputbtn.addEventListener("click", function()
{
    myleads.push(inputel.value); 
    inputel.value = "";
    render(myleads);
    localStorage.setItem("myleads", JSON.stringify(myleads));
})
let delbtn=document.getElementById("del-btn")
delbtn.addEventListener("dblclick",function()
    {
        localStorage.clear();
        myleads=[];
        render(myleads);
    })
function render(leads){
    let listitems = "";
for (let i=0; i<leads.length ; i++) 
{
    listitems += `
    <li>
       <a href="${leads[i]}"  target='_blank'>
       ${leads[i]}    
       </a>
       </li>
       `
 } 
ulEl.innerHTML = listitems;
}