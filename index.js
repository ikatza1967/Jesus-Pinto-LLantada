function mostrarDia() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var año = fecha.getFullYear();

    var elementoDia = document.getElementById("dia");
    elementoDia.innerHTML = "Hoy es el día " + dia + " del mes " + mes + " del año " + año;
}

// CAMBIAR FOTOS

 let contenedor = document.getElementById("imagen")


let imagen = document.querySelector("img")

contenedor.addEventListener("mouseover", cambiarImagen)
contenedor.addEventListener("mouseout", iniciarImagen)


function cambiarImagen() {
    imagen.setAttribute("src", "img/vr.jpg")
}

function iniciarImagen(){
    imagen.setAttribute("src", "img/RV1.jpeg")
}