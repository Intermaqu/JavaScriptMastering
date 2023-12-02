
import colors from "../../themes/Colors.json"

export interface ButtonColorsInterface {
    lightBackground: string;
    darkBackground?: string;
    lightColor?: string;
    darkColor?: string;
    lightHover?: string;
    darkHover?: string;
    padding?: boolean;
}
  
const buttonColors: Record<string, ButtonColorsInterface> = {
    primary: {
      lightBackground: colors["01"],
      lightHover: colors["02"],
      padding: true,
    },
    
    secondary: {
      lightBackground: colors["01"],
      lightHover: colors["02"],
    },
  
    edit: {
      lightBackground: colors["13"],
      darkBackground: colors["04"],
      lightColor: colors["07"],
      darkColor: colors["05"],
      lightHover: colors["05"],
      darkHover: "#fff",
    },
    
    save: {
      lightBackground: colors["14"],
      darkBackground: colors["14"],
      lightColor: colors["06"],
      darkColor: colors["05"],
      lightHover: colors["08"],
      darkHover: colors["03"],
    },
    
    delete: {
      lightBackground: colors["09"],
      lightHover: colors["10"],
    },
  
    add: {
      lightBackground: colors["13"],
      lightColor: colors["07"],
      lightHover: colors["05"],
    }
  
};

export default buttonColors;