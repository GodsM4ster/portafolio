const userNameField = document.querySelector("[name=nombre]");
const email = document.querySelector("[name=email]");
const asunto = document.querySelector("[name=asunto]");
const mensaje = document.querySelector("[name=mensaje]");

const validateEmptyField =(e)=>{
    const field = e.target;
    const fieldValue = e.target.value;
    if(fieldValue.trim().length === 0){
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = `${field.name} es requerido`;
    }else{
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

const validatEmailFormat = e =>{
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    regex.test(field.value)
    if(fieldValue.trim().length > 5 && !regex.test(field.value)){
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "por favor ingrese un email valido";
    }else{
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

userNameField.addEventListener("blur", validateEmptyField);
email.addEventListener("blur", validateEmptyField);
email.addEventListener("input", validatEmailFormat);
asunto.addEventListener("blur", validateEmptyField);
mensaje.addEventListener("blur", validateEmptyField);
