const listVehicles = document.getElementById('vehicles');
const logout = document.getElementById('logout');

logout.onclick = function(){
    localStorage.clear();
    window.location.href = "/login"
}


fetch("http://localhost:3000/api/vehicle")
.then(rs => rs.json())
.then(data=> {
    const vehicles = data.data;
    if (vehicles.length > 0){

        let vehiclesHtml = ""
        for (const vehicle of vehicles) {
            const html = `<div class="col-lg-3 col-sm-6 my-3">
                                            <div class="col-12 bg-white text-center h-100 product-item">
                                                <div class="row h-100">
                                                    <div class="col-12 p-0 mb-3">
                                                        <a href="/vehicle/${vehicle.matricula}">
                                                            <img src=${vehicle.imagen} class="img-fluid">
                                                        </a>
                                                    </div>
                                                    <div class="col-12 mb-3">
                                                        <a href="/vehicle/${vehicle.matricula}" class="product-name">${vehicle.marca + " " + vehicle.linea}</a>
                                                    </div>
                                                    <div class="col-12 mb-3 align-self-end">
                                                        <button class="btn btn-outline-dark" type="button"><i class="fas fa-cart-plus me-2"></i>Alquilar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
            vehiclesHtml += html

        }
        listVehicles.innerHTML = vehiclesHtml
    }
})