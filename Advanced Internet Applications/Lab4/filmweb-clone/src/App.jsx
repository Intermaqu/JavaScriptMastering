import React, {useState} from 'react';
import films from "./data.json"
import Film from "./components/Film"


function App() {
  
  const [filmsList, setFilmsList] = useState(films.films)
  const [searchFilm, setSearchFilm] = useState('')

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

  function sortAsc(){
    setFilmsList(prevFilms =>{
      const newFilms = [...prevFilms]
      newFilms.sort((a,b) => (a.rating > b.rating) ? 1 : -1)
      console.table(newFilms)
      return newFilms
    })
  }

  function sortDesc(){
    setFilmsList(prevFilms =>{
      const newFilms = [...prevFilms]
      newFilms.sort((a,b) => (a.rating > b.rating) ? -1 : 1)
      console.table(newFilms)
      return newFilms
    })
  }

  function updateRating(id, rate){
    setFilmsList(prevFilms => {
      return prevFilms.map((film) => {
        return film.id === id ? {...film, rating: rate} : film
      })
    })
  }

  function makeComponent(array){
    return array.map(film => {
      return(
        <Film 
          {...film} 
          key={film.id} 
          removeFilm={removeFilm} 
          updateRating={(rate) => updateRating(film.id, rate)}
        />
      )
    })
  } 

  
  
  return (
    <>
      <input type="text" placeholder="Search..." onChange={e=>{setSearchFilm(e.target.value)}}/>
      <button onClick={addFilm}>Add Film</button>
      <button onClick={sortAsc}>Sort ASC by rating</button>
      <button onClick={sortDesc}>Sort DESC by rating</button>
      {makeComponent(filmsList.filter(film =>{
        if(searchFilm === ""){
          return film
        } else if (film.title.includes(searchFilm)){
          return film
        }
      }))}
    </>
  );
}

export default App;
