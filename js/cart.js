var arrayCarrito = [];
  

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
  <td><input class="form-control" onchange='calcular()'  type="number" id='cant${i}' min="1" value="`+array[i].count+`"></td>
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
   
    
    document.getElementById('suma').innerHTML=parseFloat((precios[1].innerHTML) *40)* parseFloat(cantidades[1].value)+parseFloat(precios[0].innerHTML) * parseFloat(cantidades[0].value)
    
    document.getElementById('suma').innerHTML+=" "+"UYU"+'<br>o<br>'+(parseFloat((precios[0].innerHTML) /40)* parseFloat(cantidades[0].value)+parseFloat(precios[1].innerHTML) * parseFloat(cantidades[1].value))
    +' '+'USD'
    
    
    
}


