// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

const obj = {
  color1: "green",
  color2: "blue",
  planet: "Earth",
  adjective: "clean",
  emojis: ["🚂", "🌍", "🛼", "🍩", "🏖", "🎠", "🔮"],
  sentence: function() {
    return `Forests are <span style=color:${this.color1}>green</span>, oceans are <span style=color:${this.color2}>blue</span>. Keep the ${this.emojis[1]} clean, for me and you.`
  }
};

obj.color2 = "purple"

document.getElementById("poem").innerHTML = obj.sentence()

// Task: Changing only the code ABOVE (lines 1-15), complete the poem and render it on the page.

// stretch goal 1️⃣: Render the most suitable emoji from the emojis array in the object somewhere in our poem.

// stretch goal 2️⃣: Without changing the object declaration above, change sea color to purple!

// stretch goal 3️⃣: Without changing the CSS file, style the values added from the object. 





