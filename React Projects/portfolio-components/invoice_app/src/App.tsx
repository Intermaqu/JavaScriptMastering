import React from "react";
import CustomButton from "./components/Buttons/CustomButton";
import {
  BodyText,
  BodyTextVariant,
  DefaultText,
  HeadingL,
  HeadingM,
  HeadingS,
} from "./components/Typography";

function App() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  return (
    <div className="App">
      <CustomButton
        type="edit"
        text="Theme Toggler"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        globalTheme={theme}
      />
      <HeadingL>HeadingL</HeadingL>
      <HeadingM>HeadingM</HeadingM>
      <HeadingS>HeadingS</HeadingS>
      <BodyText>BodyText</BodyText>
      <BodyTextVariant>BodyTextVariant</BodyTextVariant>
      <DefaultText>DefaultText</DefaultText>
      <CustomButton
        type="primary"
        text="Mark as Paid"
        onClick={() => console.log("Clicked")}
      />
      <CustomButton
        type="secondary"
        text="Mark as Paid"
        onClick={() => console.log("Clicked")}
      />
      <CustomButton
        type="edit"
        text="Edit"
        globalTheme={theme}
        onClick={() => console.log("Clicked")}
      />
      <CustomButton
        type="save"
        text="Save as Draft"
        globalTheme={theme}
        onClick={() => console.log("Clicked")}
      />
      <CustomButton
        type="delete"
        text="Delete"
        onClick={() => console.log("Clicked")}
      />
      <CustomButton
        type="add"
        text="Add New Item"
        onClick={() => console.log("Clicked")}
      />
    </div>
  );
}

export default App;
