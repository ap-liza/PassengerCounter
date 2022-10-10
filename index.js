let count = 0;
let counted = document.querySelector('.count-people')
let entries = document.querySelector('.results')
let total = document.querySelector('.total')
//increment button
function increment(){
    count = count + 1;
    counted.textContent = count
    
}
//save button
function save(){
    entries.textContent+= count + " " + "-" 
    count = 0;
    counted.textContent = 0;
}
//reset button
function reset(){

    entries.textContent="Entries: " 
}
//total

