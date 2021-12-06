var bill_amount=document.querySelector(".bill-amount")
var cash_given=document.querySelector(".cash-given")
var button=document.querySelector("#check")
var notes=document.querySelectorAll(".no-of-notes")
var message=document.querySelector("#message")


const note=[2000, 500, 100, 20, 10, 5, 1]

button.addEventListener("click", function billCheck(){
    //console.log(bill);
    //console.log(cash);
    hideMessage()
    if(bill_amount.value > 0){
        if(cash_given.value >= bill_amount.value){
            const remainingChange=cash_given.value - bill_amount.value
            calculateChange(remainingChange)
        }
        else{
            //console.log("less")
            //showMessage("Please pay your bill amount")
            alert("Please pay proper bill amount...")
        }
    }
    else{
        showMessage("Please enter bill details...")
    }
})

function calculateChange(remainingChange){
    for(var i=0; i<note.length; i++){
        const numberofNotes=Math.trunc(remainingChange / note[i])
        remainingChange=remainingChange % note[i]
        if(numberofNotes>0)
            notes[i].innerText=numberofNotes
    }
}

function showMessage(msg){
    message.style.display="block"
    message.innerText=msg
}

function hideMessage(){
    message.style.display="none"
}
