const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
fetch (PRODUCTS_URL)
.then(respuesta => respuesta.json())
.then(auto => {

    for(vehiculos of auto){
    document.getElementById("cont").innerHTML+=`
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + vehiculos.imgSrc + `" alt="` + vehiculos.desc + `" class="img-thumbnail">
            </div>
            
            <div class="col">
            
                <div class="d-flex w-100 justify-content-between">
                
                    <h4 class="mb-1">`+ vehiculos.name +`</h4>

<p>${vehiculos.description}</p>

                   
                </div>

            </div>
            <div class="text-muted">` +"Precio: " +vehiculos.currency + vehiculos.cost + ` </div>
        </div>
    </div>
    `
}})