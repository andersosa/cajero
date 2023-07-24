const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("pass-input");
const btnLogin = document.getElementById("btn-login");

const users = [
  {
    email: "Samantha",
    password: "1234",
    balance: 200,
  
  },

  {
    email: "Emily",
    password: "5678",
    balance: 500,
  },
  {
    email: "Miguel",
    password: "9123",
    balance: 600,
  },
];

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let email = emailInput.value;
  let password = passwordInput.value;

  let loggedUser = users.find(
    (element) => element.email === email && element.password === password
  );

  if (loggedUser) {
    // localStorage.setItem("loggedUser", loggedUser);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.href = "./home.html";
  } else {
    alert("El usuario o la contraseña son incorrectos");
  }
});


