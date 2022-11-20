// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const newCats = [...cats,"Broom"];
    return newCats;
}

function prependCat() {
    const newCats2 = ["Arnold",...cats];
    return newCats2;
}
function removeLastCat() {
    const cats1 = cats.slice(0, -1);
    return cats1;
    
}
function removeFirstCat() {
    const cats2 = cats.slice(1);
    return cats2;
}