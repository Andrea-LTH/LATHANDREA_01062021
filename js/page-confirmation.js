//****** récupération de l'orderID dans le localStorage******//
const responseID= localStorage.getItem("order");
//*********récupération du prix total du panier************//
let basket = JSON.parse(localStorage.getItem("andrea_orinoco"));
let totalBasket = [];
for(let i =0; i<basket.length; i++){  
    let total = basket[i].subTotal; 
    totalBasket.push(total); 
}
//*************Addition des prix*************//
const reducer = (acc,cur) => acc + cur ;
//*************strucutre HTML de la page-confirmation commande************//
let container = document.querySelector("#information")
    container.innerHTML= `
    <h1>Confirmation de votre commande</h1>
    <div id="informations">
        <h2> Merci pour votre commande!</h2>
        <p>Votre commande numéro: <span class="command-number">${responseID}</span>, a bien été prise en compte.</p>
        <p> Le montant total de votre commande est de ${(totalBasket.reduce(reducer))} euros.</p>
        <h3> A bientôt!</h3>
        <div id="return">
        <button class="delete-localStorage"> Retour à la page d'accueil </button>
        </div>       
    </div>`
let returnFirstPage = document.querySelector(".delete-localStorage")
    .addEventListener("click",function(e){
        e.preventDefault;
    //.removeItem pour vider le localStorage
    localStorage.clear()
    //redirection vers la page d'accueil//
    window.location.href = "index.html"
    });






