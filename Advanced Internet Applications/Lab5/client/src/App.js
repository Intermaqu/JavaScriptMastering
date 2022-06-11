import axios from "axios";
import React, { useEffect, useState } from "react";
import Champion from "./components/Champion";
import "./style/app.css";

function App() {
  const [champions, setChampions] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  const fetchData = () => {
    axios({
      method: "GET",
      url: "http://localhost:3001/users/getAllChampions",
    })
      .then((res) => setChampions(res.data))
      .catch((e) => console.log(e));
  };

  const buyChampion = (championId) => {
    axios({
      method: "POST",
      url: "http://localhost:3001/users/buyChampion",
      data: {
        id: championId,
      },
    }).then(fetchData);
  };

  const submitCart = () => {
    let items = sessionStorage.items.split(",");
    for (let item of items) {
      buyChampion(item);
    }
    sessionStorage.clear();
    setDisplayCart(false);
  };

  const clearCart = () => {
    sessionStorage.clear();
    setDisplayCart(false);
  };

  const addToCart = (id) => {
    let items = sessionStorage.items ? sessionStorage.items.split(",") : [];
    if (!items.includes(id)) {
      items.push(id);
    }
    sessionStorage.setItem("items", items);
  };

  useEffect(fetchData, []);

  return (
    <div className="App">
      <h1>x</h1>
      <button onClick={() => setDisplayCart(true)}>CART</button>
      {!displayCart ? (
        <div className="champions">
          {champions.map(
            (champion) =>
              champion.available && (
                <Champion
                  id={champion.id}
                  key={champion.id}
                  name={champion.name}
                  price={champion.price}
                  role={champion.role}
                  addToCart={() => addToCart(champion.id)}
                />
              )
          )}
        </div>
      ) : (
        <div>
          <div className="champions">
            {champions.map(
              (champion) =>
                sessionStorage.items.split(",").includes(champion.id) && (
                  <Champion
                    id={champion.id}
                    key={champion.id}
                    name={champion.name}
                    price={champion.price}
                    role={champion.role}
                  />
                )
            )}
          </div>
          <button onClick={clearCart}>CLEAR CART</button>
          <button onClick={submitCart}>SUBMIT CART</button>
        </div>
      )}
    </div>
  );
}

export default App;
