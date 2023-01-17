(document).ready(function(){
  $("button-enviar").click(function(){
    $("button-enviar").animate({ 
      backgroundColor:"blue"
    },1000);
  });
});

function checkPassword() {
  const password = document.getElementById("password").value;
  if (password === "minhasenha") {
    alert("Senha correta!");
  } else {
    alert("Senha incorreta, tente novamente.");
  }
}
