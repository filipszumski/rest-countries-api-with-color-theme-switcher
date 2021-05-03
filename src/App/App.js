import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Filters } from "./Filters";
import { Countries } from "./Countries";
import { useCountriesData } from "./useCountriesData";

function App() {
  const countriesData = useCountriesData();

  return (
    <div className="App">
      <Header title="Where is the world?" />
      <Main>
        <Filters />
        <Countries countriesData={countriesData} />
      </Main>
    </div>
  );
}

export default App;
