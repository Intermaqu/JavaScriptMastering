import FormInput from "./components/FormInput.js";
import React from "react";

const App = () => {
  const [day, setDay] = React.useState(0);

  return (
    <div className="App">
      <FormInput 
        name="day"
        value={day}
        setValue={setDay}
      />
    </div>
  );
}

export default App;
