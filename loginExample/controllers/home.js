const num1Input = document.getElementById("num-input");
const buttonSumar = document.getElementById("btn-suma");
const buttonResta = document.getElementById("btn-resta");
const infoDiv = document.getElementById("user-info");
const btnLogout = document.getElementById("btn-logout");
const resultDiv = document.getElementById("user-info");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

let saldo = loggedUser.balance

let inputValue1 = "";

num1Input.addEventListener("change", function () {
    inputValue1 = parseInt(num1Input.value);
});

buttonSumar.addEventListener("click", function () {
  let nuevoSaldo = saldo+ inputValue1 
    saldo = nuevoSaldo;

  resultDiv.innerHTML += `<div>${nuevoSaldo}</div>` ;
 
})

buttonResta.addEventListener("click", function () {
    let nuevoSaldo = saldo - inputValue1   
     
   saldo = nuevoSaldo;
    
      resultDiv.innerHTML += `<div>${nuevoSaldo}</div>`;
          
  })

if (!loggedUser) {
  alert("debes iniciar sesion");
  window.location.href = "./index.html";
}

infoDiv.innerHTML = `
<div>
<span>BIENVENIDO ${loggedUser.email} </span>
<span>TU SALDO ES DE ${loggedUser.balance} </span>
<div>`;

btnLogout.addEventListener("click", function () {
  localStorage.removeItem("loggedUser");
  window.location.href = "./index.html";
});




//const num2Input = document.getElementById("txt-input");
//console.log("prueba: ", resultdiv); //......
//let persona1= {nombre:"lautaro", password : 123, saldo:150}
// localStorage.setItem("saldo",saldo)
//let inputValue2 = "";
//num2Input.addEventListener("change", function () {
    //inputValue2 = parseInt(num2Input.value);
//});//
 //localStorage.setItem("saldo",saldo)