$(button-enviar).ready(function(){
  $("main section#contato form input").click(function(){
    $("main section#contato form input").animate({ 
      backgroundColor: "blue"
    }, 1000);
  });
});
