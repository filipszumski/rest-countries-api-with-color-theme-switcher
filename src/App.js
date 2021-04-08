import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Where is the world?</h1>
        <span>Lightn Mode</span>
      </header>
      <main>
        <section>
          <p>
            <input placeholder='Seach for a country...' disabled name="country" type="text" />
          </p>
          <p>
            <select name="region">
              <option value="" disabled selected hidden>Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </p>
        </section>
        <section>

        </section>
      </main>
    </div>
  );
}

export default App;
