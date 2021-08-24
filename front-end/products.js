window.addEventListener("DOMContentLoaded", (event) => {

    getTeddies();

    function getTeddies(){
        fetch('http://localhost:3000/api/teddies')
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(teddies) {
                fillProducts(teddies);
            })
            .catch(function(err) {
            console.log("Une erreur est survenue") // Une erreur est survenue
        });
    }

    function fillProducts(teddies){
        
        var productList = document.getElementById("product-list");

        for(var i= 0; i < teddies.length; i++)
        {
            var productElement = document.createElement("div")
            productElement.innerHTML= "<div class='card' style='width: 18rem;'><img src=" + teddies[i].imageUrl +" class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" + teddies[i].name + " - " + teddies[i].price/100 + "€</h5><p class='card-text'>"+ teddies[i].description + "</p><a href='product.html?id="+ teddies[i]._id +"' class='btn btn-primary'>Voir le produit</a></div></div>"
        
            productList.appendChild(productElement)
        }
    }
});


