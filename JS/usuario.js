const primerNombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const boton = document.getElementById("botn1")
const boton2 = document.getElementById("botn2")


function onSubmitF(e) {
    e.preventDefault()
    const usuario = {
        primerNombre:primerNombre.value,
        apellido:apellido.value,
        email: email.value,
        password:password.value,}

      if (primerNombre.value === "" || apellido.value === "" || email.value === "" || password.value === "" || password2.value === "" ) {
        msg.innerHTML = "<p class='tex-completo'> Lee con atención y rellena el formulario</p>";
      } 
      else if (/^\ w+@ [a-zA-Z_]+?\.[a-zA-Z] {2,3}$/.test(email.value) == false) {
        msg.innerHTML = "El email ingresado no es correcto";
      } 
      else if (/^(?=[^\d_].*?\d)\w(\w|[ !@ #$%]){7,20}/.test(password.value && password2.value) == false) {
        msg.innerHTML = "<p class='tex-contraseña'> La cotraseña no cumple los requerimientos</p>"
      } 
      else {
        msg.innerHTML = "<p class='tex-datos'> ¡Aww yeah! Ahora eres parte de la mejor comunidad Tomb Raider...¡¡¡FELICIDADES!!!</p>";
      }
      localStorage.setItem("form", JSON.stringify(usuario));
    }

    