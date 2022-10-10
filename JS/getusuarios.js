let users = JSON.parse(localStorage.getItem("users"));
let usuariost= document.querySelector('.contenedor-users');

for(let i=0; i<users.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
   
  }

  
  /*function generateListItems(arg){
    let allusers=" "
    for(let i=0; i<arg.length; i++) {
        allusers +=  `<li>${arg[i].primerNombre}</li>  `
        allusers +=  `<li>${arg[i].apellido}</li>  ` 
        allusers +=  `<li>${arg[i].email}</li>  `   
    }
        
    return allusers
  }

  document.querySelector("main").innerHTML=`
  <ol>
  ${generateListItems(users)}
  </ol>
  `;*/

  function ListaUsuarios() {
   
    while (usuariost.firstChild) {
      usuariost.removeChild(usuariost.firstChild);
    }
  
    for(let i = 0; i < users.length; i++) {
        const div_card = document.createElement('div');
        div_card.className = "card"
        div_card.innerHTML = 
        `       <div class="card-header">
                    Tomb Raider${i + 1}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><div><b>Nombre:</b></div> <div>${users[i].primerNombre}</div></li>
                  <li class="list-group-item"><div><b>Nombre:</b></div> <div>${users[i].apellido}</div></li>
                  <li class="list-group-item"><div><b>Correo:</b></div> <div>${users[i].email}</div></li>
                </ul>
               `;
    
        usuariost.appendChild(div_card);
    }
  }

ListaUsuarios(); 







  
