const bill_amount=document.querySelector(".bill-amount")
const cash_given=document.querySelector(".cash-given")
const button=document.querySelector("#check")
const notes=document.querySelectorAll(".no-of-notes")
const message=document.querySelector("#message")
const next=document.querySelector(".next")
const section=document.querySelector(".nextb")
const table=document.querySelector("fill-table")
const tbl=document.querySelector(".tbl")

const note=[2000, 500, 100, 20, 10, 5, 1]

next.addEventListener("click",() =>{
    section.style.display="block"
    //button.style.display="block"
    next.style.display="none"
    tbl.style.display="none"
})

button.addEventListener("click", ()=>{
    //console.log(bill);
    //console.log(cash);
    tbl.style.display="block"
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

const calculateChange = (remainingChange) =>{
    for(var i=0; i<note.length; i++){
        const numberofNotes=Math.trunc(remainingChange / note[i])
        remainingChange=remainingChange % note[i]
        if(numberofNotes>0)
            notes[i].innerText=numberofNotes
    }
}

const showMessage = (msg) =>{
    message.style.display="block"
    message.innerText=msg
}

const hideMessage = () =>{
    message.style.display="none"
}
