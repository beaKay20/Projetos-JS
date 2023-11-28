const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passWordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //verificar se o nome está vazio
  if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
    return;
  }

  //verificar se o email está preenchido e se é válido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu e-mail");
    return;
  }
  //verificar se a está preenchida
  if (!validatePassword(passWordInput.value, 8)) {
    alert("A senha precisa ter no mínimo 8 digitos.");
    return;
  }

  //verificar se a situação foi selecionada
  if (jobSelect.value === "") {
    alert("Por favor selecione a sua situação!")
    
  }
  //verificar se a mensagem está preenchida
  if (messageTextarea.value === "") {
    alert ("Por favor digite uma mensagem.")
    
  }

  //Se todos os componetes estiverem corretamente preenchidos, envie o form
  form.submit();
});

   //Função para validar e-mail

   function isEmailValid(email){
    
    //criar uma regex para validar
   const emailRegex = new RegExp(
        /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,}$/
   );

   if(emailRegex.test(email)){
    return true;
   }
   return false;
   }

   //função que valida a senha

   function validatePassword(passWord, minDigits){
    if (passWord.length >= minDigits) {
      //senha válida
      return true
        
    }
    //senha invalida
    return false 
   }