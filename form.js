function verificarPoliticaPrivacidad() {
    var checkbox = document.getElementById("privacy");
    var botonEnviar = document.getElementById("patata");
    botonEnviar.disabled = !checkbox.checked;
    if (checkbox.checked) {
      alert("La política de privacidad ha sido aceptada.");
      
    // if (checkbox.checked) {
    //   botonEnviar.disabled = false;
    // } else {
    //   botonEnviar.disabled = true;
    // }
  }
}
                        // logeo
   
                        function  loguear(){

let name=document.getElementById("name").value
// let email=document.getElementById("email").value
let pass=document.getElementById("password").value

if(name =="jesus" && pass =="1234")
{
  window.location="hola.html";
  
}
else
{
  alert("Datos incorrectos");
}

                        }