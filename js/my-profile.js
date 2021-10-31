
function archivoPrevio() {
    let preview = document.getElementById('foto');
    let file    = document.querySelector('input[type=file]').files[0];
    let reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result; 
      document.getElementById('contenido').innerHTML= reader.result;
      
    }
  
    if (file) {
      reader.readAsDataURL(file);
     
    } else {
      preview.src = "img/perfil.jpg";
    }
  }


function guardarDatos() {
    if(document.getElementById('nombre').value.trim()===""||document.getElementById('apellido').value.trim()===""||document.getElementById('edad').value.trim()==="" ||document.getElementById('email').value.trim()==="" ||document.getElementById('telefono').value.trim()===""){
        return swal({
            title: "Deve completar todos los datos",
            icon: 'error',
            button: 'Ok'
        });
    }else{
    let perfil = {};
    let preview = document.getElementById('foto');
    
    perfil.nombre = document.getElementById('nombre').value 
    perfil.apellido = document.getElementById('apellido').value 
    perfil.edad = document.getElementById('edad').value 
    perfil.email = document.getElementById('email').value 
    perfil.telefono = document.getElementById('telefono').value 
    perfil.imagen = preview.src
    localStorage.setItem('perfilUsuario', JSON.stringify(perfil));
    return swal({
        title: "Dátos guardados",
        icon: 'success',
        button: 'Ok' 
        
    })


}
}


document.addEventListener("DOMContentLoaded", function (e) {
    let preview = document.getElementById('foto');
    let perfil = JSON.parse(localStorage.getItem('perfilUsuario'));
   
    if (perfil != null){
        

      document.getElementById('nombre').value = perfil.nombre;
      document.getElementById('edad').value= perfil.edad;
      document.getElementById('apellido').value = perfil.apellido;
      document.getElementById('email').value = perfil.email;
      document.getElementById('telefono').value = perfil.telefono;
      document.getElementById('foto').src = perfil.imagen;

      document.getElementById("dropdownMenuButton").innerHTML="Bienvenido: "+perfil.nombre;
  
     

    }
    else {
      preview.src = "img/perfil.jpg";
    }

});

