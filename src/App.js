import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { CountriesPage } from "./features/countries/CountriesPage";
import { CountryPage } from "./features//countries/CountryPage";
import { useCountriesData } from "./features/useCountriesData";
import { Header } from "./common/Header";
import { useTheme } from "./useTheme";
import { darkTheme, lightTheme } from "./theme";
import { toCountries, toCountry } from "./routes";

const App = () => {
    const countriesData = useCountriesData();
    const { themeName, toggleThemeName } = useTheme();

    return (
        <ThemeProvider theme={themeName === "Light" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <HashRouter>
                <Header title="Where is the world?" themeName={themeName} toggleThemeName={toggleThemeName} />
                <Switch>
                    <Route path={toCountry()}>
                        <CountryPage countriesData={countriesData} />
                    </Route>
                    <Route path={toCountries()}>
                        <CountriesPage countriesData={countriesData} />
                    </Route>
                    <Route path="/">
                        <Redirect to={toCountries()} />
                    </Route>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    )
};

export default App;