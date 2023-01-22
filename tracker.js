let count = 0;
let count2 = 0;
let countEl = document.getElementById("count-el")//pass in argument
let winsEl = document.getElementById("wins-el")//pass in argument
let losesEl = document.getElementById("loses-el")//pass in argument
//DOM- document object model aka how you use javascript to modify a website
let saveEl = document.getElementById("save-el")
function incrementW(){
    count +=1
    winsEl.innerText = count;
}
function incrementL(){
    count2 +=1
    losesEl.innerText = count2;
}
function save(){
    let saveCt = "W: "+ count + " L: "+count2 + " - "
    saveEl.textContent += saveCt;
    //wins
     count = 0;
     winsEl.textContent = count;
     //losses
     count2 = 0;
     losesEl.textContent = count2;
    ///when i used innerText the spaces between the dashes wouldnt work so had to use textContent bc it can pick up
    //hidden elements unlike innerText

}


