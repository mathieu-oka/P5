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
        })
        .catch(function(err) {
            console.log('Une erreur est survenue 2')
        })
    }

    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
      }

    function getCard(teddy){
        var productPic = document.getElementById('product-pic');
        var productName = document.getElementById('product-name');
        var productDes = document.getElementById('product-des');
        var productPrice = document.getElementById('product-price');
        var form = document.getElementsByTagName('option')
        var formZero = form[0]
        var formOne = form[1];
        var formTwo =form[2];
        var formThree =form[3];

        productPic.src = teddy.imageUrl;
        productName.innerText = teddy.name;
        productDes.innerText = teddy.description;
        productPrice.innerText = financial(teddy.price/100) + (' €');

        formZero.innerText = 'Choisissez une couleur';
        formOne.innerText = teddy.colors[0];
        formTwo.innerText = teddy.colors[1];
        formThree.innerText = teddy.colors[2];


        
        console.log(form)
        console.log(formOne)
        console.log(teddy) 
    }
});