import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Filters } from "./Filters";
import { Countries } from "./Countries";

function App() {
  return (
    <div className="App">
      <Header title="Where is the world?" />
      <Main>
        <Filters />
        <Countries />
      </Main>
    </div>
  );
}

export default App;
