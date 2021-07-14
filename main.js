// ketvirta uzduotis

const h1ND4 = document.querySelector('h1');

h1ND4.innerText = 'Zuikio darzas'; 

const ingredientaiND4 = document.querySelectorAll('li'); 

for (let i = 0; i < ingredientaiND4.length; i++) {
    const item = ingredientaiND4[i];
    item.innerText = 'Israuta darzove';
    console.log(item);
}

