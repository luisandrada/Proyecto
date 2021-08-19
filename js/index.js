if(localStorage.length===0){
    location.href="login.html";
}
function desconectar(){
    localStorage.clear();
    location.href="login.html";
}
