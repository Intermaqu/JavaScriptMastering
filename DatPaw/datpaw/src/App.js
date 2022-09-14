import React from "react"
import Animal from "./component/Animal"
import "./style/app.css"


function App() {
  return (
    <div className="app">
      <Animal
        name = "Burek"
        description = "Piesek Edka"
        gender = "male"
        age = "3 Months"
        image = "https://picsum.photos/400"
      />
      <Animal
        name = "Burkica"
        description = "Pieska Edka"
        gender = "female"
        age = "6 Months"
        image = "https://picsum.photos/400"
      />
    </div>
  );
}

export default App;
