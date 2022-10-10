
const primerNombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const boton = document.getElementById("botn1")
const boton2 = document.getElementById("botn2")

const div_sucess = document.querySelector('.alert-success');


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
        alert(" La contraseña no cumple los requerimientos")
      } 
      else {
              //msg.innerHTML = "<p class='tex-datos'> ¡Aww yeah! Ahora eres parte de la mejor comunidad Tomb Raider...¡¡¡FELICIDADES!!!</p>";
              alert("Aww yeah! Ahora eres parte de la mejor comunidad Tomb Raider...¡¡¡FELICIDADES!!!")

              const usuarios = JSON.parse(localStorage.getItem("users"));
              let usuariostomb= usuarios || [];
              usuariostomb.push(usuario)
              localStorage.setItem("users", JSON.stringify(usuariostomb))
              paintUser();
              Alertsucess();
              
             
          
       
      }

      primerNombre.value= ""
      apellido.value= ""
    email.value =""
    password.value =""
    password2.value= ""
    setTimeout(function () {
    }, 5000);


    }

    function onDelete(e)
    {
      localStorage.clear()
    }

    function Alertsucess(){

        while (div_sucess.firstChild) {
          div_sucess.removeChild(div_sucess.firstChild);
      }
        const pop_alert = document.createElement('div');
        pop_alert.className = "alert alert-success mt-3";
        pop_alert.role = "alert";
        pop_alert.innerHTML = "Bienvenid@ a la mejor comunidad ¡¡FELICIDADES!!";
        div_sucess.appendChild(pop_alert);
        
        
        setTimeout(() => {
            pop_alert.remove();
            location.href = "formulario.html"
        }, 5000);
    }

  boton.addEventListener('click',onSubmitF)
  boton2.addEventListener('click',onDelete)

    
 
    