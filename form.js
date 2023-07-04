function verificarPoliticaPrivacidad() {
    var checkbox = document.getElementById("privacy");
    var botonEnviar = document.getElementById("open-modal");
    botonEnviar.disabled = !checkbox.checked;
    // if (checkbox.checked) {
    //   botonEnviar.disabled = false;
    // } else {
    //   botonEnviar.disabled = true;
    // }
  }
  