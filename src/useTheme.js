import { useEffect, useState } from "react";
import { Loading } from "./common/Loading";


export const useTheme = () => {
    const getInitialState = () => {
        const localeStorageState = localStorage.getItem("theme");

        if (!localeStorageState) {
            return "Dark"
        }
        return JSON.parse(localeStorageState);
    }

    const [themeName, setThemeName] = useState(getInitialState());

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(themeName));
    }, [themeName]);

    const toggleThemeName = () => {
        return themeName === "Light" ? setThemeName("Dark") : setThemeName("Light");
    };

    return { themeName, toggleThemeName };
}