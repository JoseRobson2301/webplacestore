(document).ready(function(){
  $("button-enviar").click(function(){
    $("button-enviar").animate({ 
      backgroundColor:"blue"
    },1000);
  });
});

//function checkPassword() {
//  const password = document.getElementById("password").value;
//  if (password === "minhasenha") {
//    alert("Senha correta!");
//  } else {
//    alert("Senha incorreta, tente novamente.");
//  }
//}

function checkAuth() {
  // Verifica se o usuário está autenticado
  if (!isAuthenticated()) {
    document.getElementById("lockScreen").style.display = "block";
    document.getElementById("appContent").style.display = "none";
  } else {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("appContent").style.display = "block";
  }
}

function unlock() {
  const password = document.getElementById("password").value;
  if (password === "minhasenha") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("appContent").style.display = "block";
  } else {
    alert("Senha incorreta, tente novamente.");
  }
}
