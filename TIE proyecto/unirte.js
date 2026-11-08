const form = document.getElementById("submit-btn");
const formInput = document.querySelector("input");
const submitText = document.getElementById("submit-text");
let submit = false;
console.log("TEST1")
form.addEventListener('click', (e)=>{
    e.preventDefault();
    if(formInput.value != ""){
        submitText.textContent = "Gracias por vuestro confianza";
        formInput.value = ""  
    }  
})
