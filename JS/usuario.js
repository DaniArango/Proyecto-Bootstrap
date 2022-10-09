

const primerNombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const boton = document.getElementById("botn1")
const boton2 = document.getElementById("botn2")
const boton3= document.getElementById("botn3")

function paintUser(){
  let perfil = JSON.parse(localStorage.getItem("users"))
  console.log("Mi objeto",perfil)
 
}
function Usuarios(){
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
}


function onSubmitF(e) {
    e.preventDefault()
    let usuario = {
        primerNombre:primerNombre.value,
        apellido:apellido.value,
        email: email.value,
        password:password.value}

   

      if (primerNombre.value === "" || apellido.value === "" || email.value === "" || password.value === "" || password2.value === "" ) {
       //.innerHTML = "<p class='tex-completo'> Lee con atención y rellena el formulario</p>";
       alert("Lee con atención y rellena el formulario")
      } 
      else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value) == false) {
       // msg.innerHTML = "El email ingresado no es correcto";
       alert("El email ingresado no es correcto")
      } 
      else if (/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password.value && password2.value) == false) {
        //msg.innerHTML = "<p class='tex-contraseña'> La cotraseña no cumple los requerimientos</p>"
        alert(" La cotraseña no cumple los requerimientos")
      } 
      else {
        //msg.innerHTML = "<p class='tex-datos'> ¡Aww yeah! Ahora eres parte de la mejor comunidad Tomb Raider...¡¡¡FELICIDADES!!!</p>";
        alert("Aww yeah! Ahora eres parte de la mejor comunidad Tomb Raider...¡¡¡FELICIDADES!!!")
      }

    const usuarios = JSON.parse(localStorage.getItem("users"));
    let usuariostomb= usuarios || [];
    usuariostomb.push(usuario)
    localStorage.setItem("users", JSON.stringify(usuariostomb))
    paintUser();

    }

    function onDelete(e)
    {
      localStorage.clear()
    }

  boton.addEventListener('click',onSubmitF)
  boton2.addEventListener('click',onDelete)
  boton3.addEventListener('click',Usuarios)
    
 
    