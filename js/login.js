function verificar(){
    let usuario = {};
    let nomusdato = document.getElementById("nomus").value;
    let conusdato = document.getElementById("conus").value;

    if(nomusdato.trim()==="" || conusdato.trim()===""){

        document.getElementById("ingdat").innerHTML="Debe ingresar ambos datos";
    }else{
        
      location.href="index.html";
      usuario.nombre = nomusdato;
      usuario.contraseña = conusdato;

      localStorage.setItem("usuario",JSON.stringify(usuario));

    }
}
function presionar(){
  tecla = event.keyCode;
  if(tecla == 13){
   verificar()
 
  }
 
 }
 window.onkeydown = presionar;