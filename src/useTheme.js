import { useState } from "react";

export const useTheme = () => {
    const [themeName, setThemeName] = useState("Dark");

    const toggleThemeName = () => {
        return themeName === "Light" ? setThemeName("Dark") : setThemeName("Light");
    };

    return { themeName, toggleThemeName };
}