window.addEventListener("DOMContentLoaded", (event) => {
    const myId = getProductId();

    getProductInfo();

        
    function getProductId() {
        return new URL(location.href).searchParams.get('id')
    }

    function getProductInfo() {
        fetch('http://localhost:3000/api/teddies/' + myId)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(teddy) {
            getCard(teddy);
            formulaire(teddy);
            selectColors(teddy);
            
        })
        .catch(function(err) {
            console.log('Une erreur est survenue 2')
        })
    }

    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
      }


    function formulaire(teddy){
        var choco = document.getElementById('choose');
        

        for( i = 0; i < teddy.colors.length; i++)
        {
            var opt = document.createElement("option");
            console.log(opt);
            choco[i].innerText = opt;
            choco.appendChild(opt);
             
        }
    }
    function selectColors(teddy){
        var form = document.getElementsByTagName('option')

        for(var i = 0; i < form.length; i++)
        {
            
            var formOption = form[i];
            formOption.innerText = teddy.colors[i];
        }
      }

      
    function getCard(teddy){
        var productPic = document.getElementById('product-pic');
        var productName = document.getElementById('product-name');
        var productDes = document.getElementById('product-des');
        var productPrice = document.getElementById('product-price');
        var form = document.getElementsByTagName('option')
        
        
        

        productPic.src = teddy.imageUrl;
        productName.innerText = teddy.name;
        productDes.innerText = teddy.description;
        productPrice.innerText = financial(teddy.price/100) + (' €');

        
        


        
        
        console.log(teddy) 
    }
});