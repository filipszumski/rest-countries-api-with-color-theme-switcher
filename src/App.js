import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { CountriesPage } from "./features/CountriesPage";
import { CountryPage } from "./features/CountryPage";
import { useCountriesData } from "./features/useCountriesData";
import { Header } from "./common/Header";
import { useTheme } from "./useTheme";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
    const countriesData = useCountriesData();
    const { themeName, toggleThemeName } = useTheme();

    return (
        <ThemeProvider theme={themeName === "Light" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <HashRouter>
                <Header title="Where is the world?" themeName={themeName} toggleThemeName={toggleThemeName} />
                <Switch>
                    <Route path="/countries/:name">
                        <CountryPage countriesData={countriesData} />
                    </Route>
                    <Route path="/countries">
                        <CountriesPage countriesData={countriesData} />
                    </Route>
                    <Route path="/">
                        <Redirect to="/countries" />
                    </Route>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    )
};

export default App;