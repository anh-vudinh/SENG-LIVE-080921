const createPokemon = function(){
    let pokemon = prompt('Which pokemon ar eyou today?');
    return pokemon;
}

createPokemon();

const renderPokemon = pokemon => console.log(`Rendering ${pokemon}`);