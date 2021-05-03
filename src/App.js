import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { CountriesPage } from "./features/CountriesPage";
import { CountryPage } from "./features/CountryPage";
import { lightTheme, darkTheme } from "./theme";

const App = () => {

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <HashRouter>
                <Switch>
                    <Route path="/countries/:name">
                        <CountryPage />
                    </Route>
                    <Route path="/countries">
                        <CountriesPage />
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