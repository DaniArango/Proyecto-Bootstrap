let users = JSON.parse(localStorage.getItem("users"));
let usuariost= document.querySelector('.contenedor-users');

for(let i=0; i<users.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
   
  }

  
  function generateListItems(arg){
    let allusers=" "
    for(let i=0; i<arg.length; i++) {
        allusers +=  `<li>${arg[i].primerNombre}</li>  `   }
    return allusers
  }

  document.querySelector("main").innerHTML=`
  <ol>
  ${generateListItems(users)}
  </ol>
  `;







  
