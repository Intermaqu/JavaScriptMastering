import React, {useState} from 'react';
import films from "./data.json"
import Film from "./components/Film"
import "./styles/button.css"

function App() {
  
  const [filmsList, setFilmsList] = useState(films.films)
  const [searchFilm, setSearchFilm] = useState('')
  const [sorting, setSorting] = useState()

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
      let nextId=0
      for(let i = 0; i< prevFilms.length; i++){
        if(prevFilms[i].id > nextId) nextId = prevFilms[i].id
      }
      nextId += 1
      
      const name = window.prompt("What is the title of the film?")
      return [...prevFilms, {
        "id": nextId,
        "title": name,
        "image": "hp_kf.jpg",
        "description": "Weird Film???",
        rating: 1
      }]
    })
  }

  function sortAsc(){
    setFilmsList(prevFilms =>{
      const newFilms = [...prevFilms]
      newFilms.sort((a,b) => (a.rating > b.rating) ? 1 : -1)
      // console.table(newFilms)
      return newFilms
    })
    
    setSorting("Asc")
  }

  function sortDesc(){
    setFilmsList(prevFilms =>{
      const newFilms = [...prevFilms]
      newFilms.sort((a,b) => (a.rating > b.rating) ? -1 : 1)
      // console.table(newFilms)
      return newFilms
    })
    setSorting("Desc")
  }


  function sortFilms(){
    if(sorting === null)
      return
    if(sorting === "Asc")
      sortAsc()
    if(sorting === "Desc")
      sortDesc()
  }

  function updateRating(id, rate){
    setFilmsList(prevFilms => {
      return prevFilms.map((film) => {
        return film.id === id ? {...film, rating: rate} : film
      })
    })
    sortFilms()
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
      <nav>
        <input type="text" placeholder="Search..." onChange={e=>{setSearchFilm(e.target.value)}}/>
        <button onClick={addFilm}>Add Film</button>
        <button onClick={sortAsc}>Sort ASC by rating</button>
        <button onClick={sortDesc}>Sort DESC by rating</button>
      </nav>
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
