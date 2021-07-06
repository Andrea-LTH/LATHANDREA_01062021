//*********Initialisation de la variable avec définition du querySelector pour l'UL**************//
let $productsList= document.querySelector("#products-list")

//******************Récupération des éléments présents dans l'API via l'URL*************//
fetch("http://localhost:3000/api/teddies")
.then((response) => {
    if (response.ok) {
        response.json().then((products)=>{   
            for(let product of products){
                let $li = document.createElement("li")
                $li.innerHTML= `
                <a href="product.html?id=${product._id}"><img src="${product.imageUrl}"></a>
                <h2>${product.name}</h2>
                <p>${product.price/100} euros</p>`                
                $productsList.appendChild ($li)            
            }
        })
    }
});



