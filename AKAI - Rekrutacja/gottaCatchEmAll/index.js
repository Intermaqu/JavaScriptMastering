/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

import pokemons from "./data.js";
// console.log(pokemons);

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  // uzupełnij tutaj
  const pokemonsElements = pokemons.map((pokemon) => {
    // console.log(pokemon.image)
    const parent = document.createElement("div");
    parent.classList.add("pokemon");

    const image = document.createElement("img");
    image.classList.add("pokemon__image");
    image.src = pokemon.image;

    const name = document.createElement("h2");
    name.innerText = pokemon.name;
    name.classList.add("pokemon__name");

    const classes = pokemon.types
      .map((pokeClass) => pokeClass.toLowerCase())
      .join(" ");
    const classesElement = document.createElement("p");
    classesElement.innerText = classes;
    classesElement.classList.add("pokemon__classes");

    const rightColumn = document.createElement("div");
    rightColumn.classList.add("pokemon__right-column");

    rightColumn.appendChild(name);
    rightColumn.appendChild(classesElement);

    parent.appendChild(image);
    parent.appendChild(rightColumn);

    return parent;
  });

  pokemonsContainer.innerHTML = ""; // Remove all children - Way not recommended

  // while(pokemonsContainer.firstChild){  // Remove all children - Explicite directed way
  //   pokemonsContainer.remove(element);
  // }

  for (let element of pokemonsElements) {
    pokemonsContainer.appendChild(element);
  }
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  const typeFilter = Array.from(
    document.querySelectorAll("input[type='checkbox']")
  )
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id.toLowerCase());

  const textFilter = document
  .querySelector("#pokemon-name")
  .value.toLowerCase();

  const pokemonsFilteredByType = pokemons.filter((pokemon) => {
    for (let type of pokemon.types) {
      if (typeFilter.includes(type.toLowerCase())) return true;
    }
    return false;
  });

  const pokemonsFilteredByTypesAndName = pokemonsFilteredByType.filter(
    (pokemon) => pokemon.name.toLowerCase().includes(textFilter)
  );

  return pokemonsFilteredByTypesAndName;
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
  // filterPokemons(pokemons)
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
