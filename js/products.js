var arrayproducto=[];

function showProductsList(auto){

    let htmlContentToAppend = "";
    for(vehiculos of auto){
        

            htmlContentToAppend += `<div class="list-group-item list-group-item-action ">
            <div class="row" id="coso">
                <div class="col-3">
                    <img src="` + vehiculos.imgSrc + `" alt="` + vehiculos.desc + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ vehiculos.name +`-`+vehiculos.cost + vehiculos.currency+`</h4>
                        <small class="text-muted">` + vehiculos.soldCount + ` artículos</small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">`+ vehiculos.description +`</p>
                    </div>
                </div>
            </div>
        </div>
        `
        }

        document.getElementById("cont").innerHTML = htmlContentToAppend;
      
    }
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
                arrayproducto=resultObj.data;
                
                
                showProductsList(arrayproducto);
            }

            document.getElementById("precioalto").addEventListener("click",()=>{
                let vehiculos_ordenado_precio_descendente = arrayproducto.sort((em1,em2)=>{
                    return em2.cost - em1.cost
                    
                    })
                showProductsList(vehiculos_ordenado_precio_descendente);
            }

            );
            document.getElementById("preciobajo").addEventListener("click",()=>{
                let vehiculos_ordenado_precio_ascendente = arrayproducto.sort((em1,em2)=>{
                    return em1.cost - em2.cost
                    
                    })
                showProductsList(vehiculos_ordenado_precio_ascendente);
            }

            );

document.getElementById("relevanciabajo").addEventListener("click",()=>{
    let vehiculos_ordenado_relevancia_ascendente = arrayproducto.sort((em1,em2)=>{
        return em1.soldCount - em2.soldCount
        
        })
    showProductsList(vehiculos_ordenado_relevancia_ascendente);
}

);
document.getElementById("relevanciaalto").addEventListener("click",()=>{
    let vehiculos_ordenado_relevancia_descendente = arrayproducto.sort((em1,em2)=>{
        return em2.soldCount - em1.soldCount
        
        })
    showProductsList(vehiculos_ordenado_relevancia_descendente);
}

);

    })
   

    
})


       

  








    
   



    
