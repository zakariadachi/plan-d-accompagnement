const produits = [
  { id: 1,  nom: "ordinateur portable", prix: 999, categorie: "electronique", stock: 5 },
  { id: 2,  nom: "t-shirt",             prix: 25,  categorie: "vetement",     stock: 0 },
  { id: 3,  nom: "livre JavaScript",     prix: 35,  categorie: "livre",        stock: 12 },
  { id: 4,  nom: "smartphone",           prix: 799, categorie: "electronique", stock: 8 },
  { id: 5,  nom: "casque audio",         prix: 120, categorie: "electronique", stock: 15 },
  { id: 6,  nom: "clavier",              prix: 45,  categorie: "electronique", stock: 20 },
  { id: 7,  nom: "souris",               prix: 30,  categorie: "electronique", stock: 18 },
  { id: 8,  nom: "chaussures sport",     prix: 90,  categorie: "vetement",     stock: 7 },
  { id: 9,  nom: "jean",                 prix: 60,  categorie: "vetement",     stock: 10 },
  { id: 10, nom: "veste",                prix: 150, categorie: "vetement",     stock: 3 },
  { id: 11, nom: "sac à dos",             prix: 70,  categorie: "accessoire",  stock: 9 },
  { id: 12, nom: "montre",               prix: 200, categorie: "accessoire",  stock: 4 },
  { id: 13, nom: "lunettes",             prix: 110, categorie: "accessoire",  stock: 6 },
  { id: 14, nom: "tablette",             prix: 450, categorie: "electronique", stock: 11 },
  { id: 15, nom: "imprimante",            prix: 180, categorie: "electronique", stock: 2 },
  { id: 16, nom: "livre HTML & CSS",      prix: 40,  categorie: "livre",        stock: 14 },
  { id: 17, nom: "livre Python",          prix: 50,  categorie: "livre",        stock: 0 },
  { id: 18, nom: "écouteurs sans fil",    prix: 85,  categorie: "electronique", stock: 13 },
  { id: 19, nom: "pull",                 prix: 55,  categorie: "vetement",     stock: 6 },
  { id: 20, nom: "chargeur USB",          prix: 20,  categorie: "electronique", stock: 25 }
];



// produits en stock
const stock = produits.filter(produit=> produit.stock>0)
console.log(stock)


// total 
let total =0;
produits.forEach(produit=>{
    total+=produit.prix
})
console.log(total)


// maj
const maj = produits.map(produit=>produit.nom.toUpperCase())
console.log(maj)


// verification
verifie=produits.every(produit=>produit.prix>20);
console.log(verifie)



//trouve id 2
const trouve = produits.find(produit=>produit.id=2)
console.log(trouve)


//nouveau produit
produits.push({id: 21, nom: "USB Cable",          prix: 25,  categorie: "electronique", stock: 100})
console.log(produits)



// supp le 
produits.shift()


// sort 
const arr = produits.sort((a,b)=>b.prix - a.prix);
console.log( arr)






// function stosk(){
//     let s=0;
// for(i=0;i<produits.length;i++){
//         s+=produits[i].stock;
//     }
//     return s;
// }
// console.log(stosk())



// function totalPrice(){
//     let total=0;
// for(i=0;i<produits.length;i++){
//         total+=produits[i].prix;
//     }
//     return total;
// }
// console.log(totalPrice())


// function nomMaj(){
//     let maj=[];
// for(i=0;i<produits.length;i++){
//         maj.push(produits[i].nom.toUpperCase())
//     }
//     return maj;
// }
// console.log(nomMaj())





// function cout(){
// for(i=0;i<produits.length;i++){
//         if (produits[i].prix>20) {
//             return 1; 
//         }return 0;
//     }
// }
// console.log(cout())



// function id2(){
// for(i=0;i<produits.length;i++){
//         if (produits[i].id==2) {
//             return produits[i]; 
//         }
//     }
// }
// console.log(id2())





// function newProduit(){
//     produits.push(
//         { id: 4, nom: "js", prix: 50, categorie: "java" ,stock: 20})
//     return produits;
// }
// console.log(newProduit())




// function supp(){
// for(i=0;i<produits.length;i++){
//         produits[i]=produits[i+1]
//     }
//     produits.length=produits.length-1
//     return produits
// }
// console.log(supp())




// function trier(){
// for(i=0;i<produits.length;i++){
//     for (let j = 0; j < produits.length-i; j++) {
//         if (produits[j].prix>produits[j+1].prix) {
//             let tri = produits[j];
//             produits[j]=produits[j+1]
//             produits[j+1]=tri
//         }
//     return produits
//     }
// }
// }
// console.log(trier())






const catalogue = [
  { id: "A1",  nom: "Pomme",        prix: 1.5, promo: false },
  { id: "A2",  nom: "Banane",       prix: 2.0, promo: true  },
  { id: "A3",  nom: "Orange",       prix: 1.8, promo: false },
  { id: "A4",  nom: "Poire",        prix: 1.7, promo: true  },
  { id: "A5",  nom: "Fraise",       prix: 3.2, promo: true  },

  { id: "B1",  nom: "Lait",         prix: 3.5, promo: false },
  { id: "B2",  nom: "Fromage",      prix: 6.0, promo: true  },
  { id: "B3",  nom: "Yaourt",       prix: 2.5, promo: false },
  { id: "B4",  nom: "Beurre",       prix: 4.2, promo: true  },
  { id: "B5",  nom: "Crème",        prix: 3.8, promo: false },

  { id: "C1",  nom: "Pain",         prix: 1.2, promo: false },
  { id: "C2",  nom: "Riz",          prix: 2.9, promo: true  },
  { id: "C3",  nom: "Pâtes",        prix: 2.4, promo: false },
  { id: "C4",  nom: "Farine",       prix: 1.9, promo: true  },
  { id: "C5",  nom: "Sucre",        prix: 2.1, promo: false },

  { id: "D1",  nom: "Huile",        prix: 7.5, promo: false },
  { id: "D2",  nom: "Sel",          prix: 0.8, promo: false },
  { id: "D3",  nom: "Poivre",       prix: 1.6, promo: true  },
  { id: "D4",  nom: "Café",         prix: 5.5, promo: true  },
  { id: "D5",  nom: "Thé",          prix: 4.8, promo: false }
];

const panier=[  { id: "D1",  nom: "Huile",        prix: 7.5, promo: false },
  { id: "D2",  nom: "Sel",          prix: 0.8, promo: false },
  { id: "D3",  nom: "Poivre",       prix: 1.6, promo: true  },
  { id: "D4",  nom: "Café",         prix: 5.5, promo: true  },
  { id: "D5",  nom: "Thé",          prix: 4.8, promo: false }];
  console.log(panier)


// add in panier
function ajouterAuPanier(idProduit, quantité) {
    const produit=catalogue.find(p=>p.id===idProduit)
    panier.push({
        idProduit: produit.id,
        quantité: produit.promo,
    })
    return panier
}

console.log(ajouterAuPanier("A2",true))


// total

function calculerTotal() {
    let t=0;
    catalogue.forEach(c => {
         t+=c.prix
        
    });
    return t
}


// promo
function appliquerPromotion() {
    catalogue.forEach(c=>{
        if(c.promo==true){
            c.prix=(c.prix*10)/100
        }
    })
    return catalogue
}


// produits chers
function produitsChers(seuil) {
    return catalogue.filter(c=>c.prix>=seuil)
}



// vide
function viderPanier() {
    panier.length=0
    return panier
}


