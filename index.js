const produits=[
    { id: 1, nom: "ordinateur", prix: 999, categorie: "electronique" ,stock: 5},
    { id: 2, nom: "t-shrit", prix: 25, categorie: "vetement" ,stock: 0},
    { id: 3, nom: "livre js", prix: 35, categorie: "livre" ,stock: 12}
]





function stosk(){
    let s=0;
for(i=0;i<produits.length;i++){
        s+=produits[i].stock;
    }
    return s;
}
console.log(stosk())



function totalPrice(){
    let total=0;
for(i=0;i<produits.length;i++){
        total+=produits[i].prix;
    }
    return total;
}
console.log(totalPrice())


function nomMaj(){
    let maj=[];
for(i=0;i<produits.length;i++){
        maj.push(produits[i].nom.toUpperCase())
    }
    return maj;
}
console.log(nomMaj())





function cout(){
for(i=0;i<produits.length;i++){
        if (produits[i].prix>20) {
            return 1; 
        }return 0;
    }
}
console.log(cout())



function id2(){
for(i=0;i<produits.length;i++){
        if (produits[i].id==2) {
            return produits[i]; 
        }
    }
}
console.log(id2())





function newProduit(){
        produits.push(
            { id: 4, nom: "js", prix: 50, categorie: "java" ,stock: 20})
        return produits;
    }
console.log(newProduit())




function supp(){
for(i=0;i<produits.length;i++){
        produits[i]=produits[i+1]
    }
    produits.length=produits.length-1
    return produits
}
console.log(supp())




function trier(){
for(i=0;i<produits.length;i++){
    for (let j = 0; j < produits.length-i; j++) {
        if (produits[j].prix>produits[j+1].prix) {
            let tri = produits[j];
            produits[j]=produits[j+1]
            produits[j+1]=tri
        }
    return produits
    }
}
}
console.log(trier())




array=produits.filter(produit=>produit.stock>0);



totaleprix=produits.reduce((sum,produit)=>sum+produit.prix,0);



array = produits.map(produit => produit.nom.touppercase());



vereffier=produits.every(produit=>produit.prix>20);



produittouver=produits.find(produit=>produit.id===2);


produits.push({ id: 4, nom: "souris", prix: 25, catégorie: "électronique", stock: 6 });


produits.shift();


produits.sort((produitp,produitd)=>produitp.prix-produitd.prix);

