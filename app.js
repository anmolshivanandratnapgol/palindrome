const txtInput = document.querySelector(".inputs input");
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");

let filterInput;    


checkBtn.addEventListener("click",() =>{
    // spliting user input character ,reversing them,and joing them into single word 
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display="block";
    if(filterInput !=reverseInput){
        return infoTxt.innerHTML =`Yes , <span>'${txtInput.value}'</span> isn't palindrome`;
    }
    return infoTxt.innerHTML =`NO , <span>'${txtInput.value}'</span> is palindrome`;


    // console.log(reverseInput , filterInput);
    // console.log(reverseInput.split('-'));
})

txtInput.addEventListener("keyup",()=>{
    // removing space and all special character...
     filterInput=txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    // console.log(filterInput);
    if(filterInput){
       return checkBtn.classList.add("active");
    }

    checkBtn.classList.remove("active");

}); 