const urlParams = location.search
const urlSearchParams = new URLSearchParams(urlParams)
const teddyID = urlSearchParams.get("id")
let $productDescription = document.querySelector("#product-description")


fetch(`http://localhost:3000/api/teddies/${teddyID}`)
    .then((response) => {
        if (response.ok) {            
            response.json().then((descriptions) => {
                let $li = document.createElement("li")
                $li.innerHTML = `
                    <img src="${descriptions.imageUrl}">
                    <h2>${descriptions.name}</h2>
                    <p> Prix: ${descriptions.price / 100} euros</p>
                    <h3>${descriptions.description}</h3>`
                $productDescription.appendChild($li);
                const $colorChoice = document.querySelector("#color-choice");
                const $quantityInput = document.querySelector("#quantity-input");
                descriptions.colors.forEach(color => {
                    $colorChoice.innerHTML += ` <option value="${color}">${color}</option>`

                });
                //Ecoute de la fonction au click du bouton"Commander" - création de la constante objectItem pour récupérer les éléments de l'oject//
                document.getElementById("add-button")
                    .addEventListener("click", function () {
                        const objectItem = {
                            _id: descriptions._id,
                            name: descriptions.name,
                            price: descriptions.price / 100,
                            subTotal: descriptions.price/100 * $quantityInput.value,
                            color: $colorChoice.value,
                            quantity: document.getElementById("quantity-input").value,
                        };                     
                         // Définition de mon localStorage //
                        let myBasket = localStorage.getItem("andrea_orinoco")
                        //Si mon panier n'est pas définit - Panier vide-LocalStorage -initier le tableau vide//
                        if (!myBasket) {
                            myBasket = [];
                            // Sinon ajout des produits dans le panier - localSTorage //                 
                        } else{
                            myBasket = JSON.parse(myBasket);                         
                        }
                        // Ajout d'un objet au panier - stringifier pour récupérer tous les éléments de l'objet"//      
                        myBasket.push(objectItem);                   
                        //Transformation en format JSON et envoie dans la KEY "andrea_orinoco" du localStorage//
                        localStorage.setItem("andrea_orinoco", JSON.stringify(myBasket));
                    });

            })


        }

    })