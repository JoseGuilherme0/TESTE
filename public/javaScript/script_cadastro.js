let nome = document.getElementById("nome");
let email = document.getElementById("email");
let formacao = document.getElementById("formacao");
let password = document.getElementById("senha");
let conf_password = document.getElementById("confsenha");
let form = document.querySelector("form");
let textEmail = document.getElementById("textEmail");
let textPassword = document.getElementById("textSenha");
let textConfSenha = document.getElementById("textSenhaConfirmar");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    nome.value == "" &&
    email.value == "" &&
    formacao.value == "" &&
    password.value == "" &&
    conf_password == ""
  ) {
    textForm.textContent = "Você precisa preencher todos os campos!";
  } else if (
    validarEmail(email.value) &&
    validarPassword(password.value) &&
    validarSenhas(password.value, conf_password.value)
  ) {
    console.log(email.value);
    console.log(password.value);
    textForm.textContent = "";
    textEmail.textContent = "";
    textPassword.textContent = "";

    const usuario = {
      nome: nome.value,
      email: email.value,
      formacao: formacao.value,
      senha: password.value,
    };

    fetch("http://localhost:8000/cadastro.html", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          textForm.textContent = data.error;
        } else {
          textForm.textContent = data.message;
        }
      })
      .catch((error) => console.error("Erro:", error));
  } else {
    console.log("Requisição não atendida");
  }
});

email.addEventListener("keyup", () => {
  if (validarEmail(email.value) !== true) {
    textEmail.textContent = "*O formato do email deve ser, ex: name@abc.com";
  } else {
    textEmail.textContent = "";
  }
});

password.addEventListener("keyup", () => {
  if (validarPassword(password.value) !== true) {
    textPassword.textContent =
      "*Senha deve conter: Minino 6 caracteres, 1 letra maiuscula, 1 letra minuscula, 1 numero e 1 caractere especial.";
  } else {
    textPassword.textContent = "";
  }

  conf_password.addEventListener("keyup", () => {
    if (!validarSenhas(password.value, conf_password.value)) {
      textConfSenha.textContent =
        "* As senhas sao diferentes, por favor degite novamente.";
    } else {
      textConfSenha.textContent = "";
    }
  });
});

function validarEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

function validarPassword(password) {
  let passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(password);
}

function validarSenhas(password, conf_password) {
  return password === conf_password;
}
