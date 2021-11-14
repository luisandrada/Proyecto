var arrayCarrito = [];

let precios = document.getElementsByClassName('precio'); 

let cantidades = document.getElementsByClassName('form-control');


getJSONData(CART_INFO_URL_DESAFIATE).then(function(resultObj) {
       
           
    if (resultObj.status === 'ok') {
        arrayCarrito = resultObj.data;
    
        crearTabla(arrayCarrito.articles)
    
}

function crearTabla(array){
  let carrito = "";
  for(let i=0; i<array.length;i++){
  
    carrito += `<tr>
  <td><img id="imta" src="`+array[i].src+`"></td>
  <td>`+array[i].name+`</td>
  <td>`+array[i].currency+`</td><td class='precio'>`+array[i].unitCost+`</td>
  <td><input class="form-control" onchange='calcular(); cal()'  type="number" id='cant${i}' min="1" value="`+array[i].count+`"></td>
  <td id='subTo${i}'>`+array[i].unitCost*array[i].count+`</td></div>
</tr>
<tr>`
                
}
document.getElementById("tabla").innerHTML = carrito;
calcular()          

}
});
function calcular(){
  let precios = document.getElementsByClassName('precio'); 

  let cantidades = document.getElementsByClassName('form-control');
 
  
  for (let i=0; i< precios.length; i++){
  
    document.getElementById('subTo'+i).innerHTML = parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);
 
    }
    document.getElementById('subTo'+0).innerHTML +=" "+"UYU"
    document.getElementById('subTo'+1).innerHTML +=" "+"USD" 
   
    let preciouyu=parseFloat((precios[1].innerHTML) *40)* parseFloat(cantidades[1].value)+parseFloat(precios[0].innerHTML) * parseFloat(cantidades[0].value)
    let preciousd=(parseFloat((precios[0].innerHTML) /40)* parseFloat(cantidades[0].value)+parseFloat(precios[1].innerHTML) * parseFloat(cantidades[1].value))
    document.getElementById('subtotal').innerHTML=preciouyu
    
    document.getElementById('subtotal').innerHTML+=" "+"UYU"+'<br>o<br>'+preciousd
    +' '+'USD'
    //de aca pa arriba es para total de los productos
    document.getElementById("15%").addEventListener("click",()=>{
      document.getElementById("envioo").innerHTML= (preciouyu*0.15)+" "+"UYU"+'<br>o<br>'+(preciousd*0.15)+"USD"
      document.getElementById("total").innerHTML=(preciouyu*0.15)+(preciouyu)+" "+"UYU"+'<br>o<br>'+((preciousd*0.15)+(preciousd))+"USD"
    
    
    }
      )
      document.getElementById("6%").addEventListener("click",()=>{
        document.getElementById("envioo").innerHTML= (preciouyu*0.06)+" "+"UYU"+'<br>o<br>'+(preciousd*0.06)+"USD"
        document.getElementById("total").innerHTML=(preciouyu*0.06)+(preciouyu)+" "+"UYU"+'<br>o<br>'+((preciousd*0.06)+(preciousd))+"USD"
    
      }
        )
        document.getElementById("9%").addEventListener("click",()=>{
          document.getElementById("envioo").innerHTML= (preciouyu*0.09)+" "+"UYU"+'<br>o<br>'+(preciousd*0.09)+"USD"
          document.getElementById("total").innerHTML=(preciouyu*0.09)+(preciouyu)+" "+"UYU"+'<br>o<br>'+((preciousd*0.09)+(preciousd))+"USD"
    
        }
          )
   }

 function cal(){
  let preciouyu=parseFloat((precios[1].innerHTML) *40)* parseFloat(cantidades[1].value)+parseFloat(precios[0].innerHTML) * parseFloat(cantidades[0].value)
  let preciousd=(parseFloat((precios[0].innerHTML) /40)* parseFloat(cantidades[0].value)+parseFloat(precios[1].innerHTML) * parseFloat(cantidades[1].value))
  
if(document.getElementById("15%").checked){
  document.getElementById("envioo").innerHTML= (preciouyu*0.15)+" "+"UYU"+'<br>o<br>'+(preciousd*0.15)+"USD"
  document.getElementById("total").innerHTML=(preciouyu*0.15)+(preciouyu)+" "+"UYU"+'<br>o<br>'+((preciousd*0.15)+(preciousd))+"USD"
     
}
if(document.getElementById("6%").checked){
  document.getElementById("envioo").innerHTML= (preciouyu*0.06)+" "+"UYU"+'<br>o<br>'+(preciousd*0.06)+"USD"
  document.getElementById("total").innerHTML=(preciouyu*0.06)+(preciouyu)+" "+"UYU"+'<br>o<br>'+((preciousd*0.06)+(preciousd))+"USD"
      
}
if(document.getElementById("9%").checked){
  document.getElementById("envioo").innerHTML= (preciouyu*0.09)+" "+"UYU"+'<br>o<br>'+(preciousd*0.09)+"USD"
  document.getElementById("total").innerHTML=(preciouyu*0.09)+(preciouyu)+" "+"UYU"+'<br>o<br>'+((preciousd*0.09)+(preciousd))+"USD"
       
}
 }


 function modal(){

  document.getElementById("tarjeta").addEventListener("click",()=>{

  document.getElementById("cuerpoModal").innerHTML=`<br>Número de tarjeta<br> <input  type="text"id="numerot" autocomplete="off"><br>
  Código de seg.<br> <input  type="text" id="segt" autocomplete="off"><br>Vencimiento (MM/AA)<br><input  type="text" id="vent" autocomplete="off"><br>`
  })
  
 
  document.getElementById("transferencia").addEventListener("click",()=>{

    document.getElementById("cuerpoModal").innerHTML=`<br>Número de cuenta<br> <input  type="text" id="numc" autocomplete="off"><br>`
    })

 }

function verificarModal(){

if(document.getElementById("tarjeta").checked){
  if(document.getElementById('numerot').value.trim()===""||document.getElementById('segt').value.trim()===""||document.getElementById('vent').value.trim()===""){
    return swal({
      title: "Deve completar todos los datos",
      icon: 'error',
      button: 'Ok'
      
  });
  }else{

    return swal({
      title: "Dátos guardados",
      icon: 'success',
      button: 'Ok' 
      
  })
  }
}
 if(document.getElementById("transferencia").checked){
  if(document.getElementById('numc').value.trim()===""){
    return swal({
      title: "Deve completar todos los datos",
      icon: 'error',
      button: 'Ok'
  })
  }else{

    return swal({
      title: "Dátos guardados",
      icon: 'success',
      button: 'Ok' 
      
  })
  }
}
if(document.getElementById("tarjeta").checked=false){
alert("ok")
}
}


function verificarEnvio(){

  if(document.getElementById('pais').value.trim()===""||document.getElementById('depa').value.trim()===""||document.getElementById('calle').value.trim()===""||document.getElementById('numero').value.trim()===""){
    return swal({
      title: "Deve completar todos los datos",
      icon: 'error',
      button: 'Ok'
  })
  } else{

    return swal({
      title: "Compra realizada con exito",
      icon: 'success',
      button: 'Ok' 
      
  })
}
}
 modal()
