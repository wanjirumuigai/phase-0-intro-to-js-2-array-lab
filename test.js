
const cats = ["Milo", "Otis", "Garfield"];
function appendCat() {
    const newCats = [...cats,"Broom"];
   return newCats;
}
console.log(appendCat());