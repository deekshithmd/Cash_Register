var bill_amount=document.querySelector(".bill-amount")
var cash_given=document.querySelector(".cash-given")
var button=document.querySelector("#check")
var notes=document.querySelectorAll(".no-of-notes")
var message=document.querySelector("#message")


const note=[2000, 500, 100, 20, 10, 5, 1]

button.addEventListener("click",()=>{
    //console.log(bill);
    //console.log(cash);
    if(bill_amount.value>0){
        if(cash_given.value>=bill_amount.value){
            const remainingChange=cash_given.value - bill_amount.value
            calculateChange(remainingChange)
            hideMessage()
        }
        else{
            showMessage()
        }
    }
})

function calculateChange(remainingChange){
    for(var i=0; note.length; i++){
        const numberofNotes=Math.trunc(remainingChange/note[i])
        remainingChange=remainingChange%note[i]
        console.log(numberofNotes)
        if(numberofNotes>0)
            notes[i].innerText=numberofNotes
        else
        notes[i].innerText=" "
    }
}
function showMessage(){
    message.style.display="block"
    message.innerText="Wash plates"
}

function hideMessage(){
    message.style.display="none"
}