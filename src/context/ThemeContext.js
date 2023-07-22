import { createContext,useContext, useState } from "react";
export const ThemeContext = createContext({
    color: "blue",
    changeColor: () => { }
});
export function ThemeColorContext({ children }) {
    const [color, setColor] = useState("green");
    function changeColor(color) {
        setColor(color)
    }
    return (
        <ThemeContext.Provider value={{ color, changeColor }}>{children}</ThemeContext.Provider>
    )
}
// create custom function or /hooks return value
export function useThemeContext(){
    const {color,changeColor} = useContext(ThemeContext);
    return {color,changeColor}
}