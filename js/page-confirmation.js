//****** récupération de l'orderID dans le localStorage******//
const responseID= localStorage.getItem("order");
//*********récupération du prix total du panier************//
let basket = JSON.parse(localStorage.getItem("andrea_orinoco"));
let  totalBasket=basket.map(product => product.price);
console.log(totalBasket);

//*************strucutre HTML de la page-confirmation commande************//
let container = document.querySelector("#information")
    container.innerHTML= `
    <h1>Confirmation de votre commande</h1>
    <div id="informations">
        <h2> Merci pour votre commande!</h2>
        <p>Votre commande numéro: <span class="command-number">${responseID}</span>, a bien été prise en compte.</p>
        <p>Le montant total de votre commande est de :<span class="total">${totalBasket}</span>euros.</p>
        <h3> A bientôt!</h3>
    </div>`

