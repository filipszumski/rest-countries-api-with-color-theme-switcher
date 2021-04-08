import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Filters } from "./Filters";

function App() {
  return (
    <div className="App">
      <Header title="Where is the world?" />
      <Main>
        <section>
          <Filters />
        </section>
        <section>
        </section>
      </Main>
    </div>
  );
}

export default App;
