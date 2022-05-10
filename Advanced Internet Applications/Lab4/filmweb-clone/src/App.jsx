import React, {useState} from 'react';
import films from "./data.json"
import Film from "./components/Film"


function App() {
  


  const [filmsList, setFilmsList] = useState(films.films)

  function removeFilm(id){
    setFilmsList(prevFilms => {
      let newFilms = []
      for(let i=0;i<prevFilms.length;i++){
        if(prevFilms[i].id!==id)
          newFilms.push({...prevFilms[i]})
      }
      console.log(newFilms)
      return newFilms
    })
  }

  function addFilm(){
    setFilmsList(prevFilms => {
      return [...prevFilms, {
        "id":prevFilms.length+1,
        "title": "Added",
        "image": "hp_kf.jpg",
        rating: 4
      }]
    })
  }

  function makeComponent(array){
    return array.map(film => {
      return(<Film {...film} key={film.id} removeFilm={removeFilm}/>)
    })
  } 
  
  return (
    <>
      <button onClick={addFilm}>Add Film</button>
      {makeComponent(filmsList)}
    </>
  );
}

export default App;
