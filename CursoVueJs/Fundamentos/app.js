/* fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((pokemon) => {
            console.log(pokemon);
        });
    })
    .catch((error) => console.log(error)); */

    /* Async quiere decir que siempre devolvera una promesa or resultado */
const obtenerPokemones = async () => {
    try {
        /* Esperemos la respuesta de fetch */
       const res= await fetch("https://pokeapi.co/api/v2/pokemon/");
       /* data va a esperar a res.json */
       const data = await res.json()
       console.log(data.results);
    } catch (exception) {
        console.log("hola");
    }
}
obtenerPokemones();