import React from 'react';
import films from "./data.json"
import Film from "./components/Film"


function App() {
  const filmsData = films.films.map(film => {
    return(<Film {...film}/>)
  })
  
  return (
    <>
      {filmsData}
    </>
  );
}

export default App;
