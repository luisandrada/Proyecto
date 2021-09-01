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




 function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  let usuario = {};
  usuario.nombre = profile.getGivenName(); 
  localStorage.setItem("usuario",JSON.stringify(usuario));


  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  location.href="index.html";
}














