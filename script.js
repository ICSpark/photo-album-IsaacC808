function fix() {
    let coconut = document.getElementById("coconut");
    coconut.remove("coconut");
    
    let coast = document.getElementById("coast");
    coast.remove(coast);

    let watermeleon = document.getElementById("watermelon");
    watermeleon.remove(watermelon);

    let sunflowers = document.getElementById("sunflowers");
    sunflowers.remove(sunflowers);

    let tree = document.createElement("img");
    tree.id = "tree";
    tree.src = "to-add/christmasTree.jpg";
    let parent = document.getElementById("photos");
    parent.appendChild(tree);

    let snowmen = document.createElement("img");
    snowmen.id = "snowmen";
    snowmen.src = "to-add/snowmen.jpg";
    parent.appendChild(snowmen);

    let stockings = document.createElement("img");
    stockings.id = "stockings";
    stockings.src = "to-add/stockings.jpg";
    parent.appendChild(stockings);

   

   

}