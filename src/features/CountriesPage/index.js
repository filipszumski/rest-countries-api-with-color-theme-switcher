import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Filters } from "./Filters";
import { Countries } from "./Countries";
import { useCountriesData } from "../useCountriesData";

export function CountriesPage() {
  const countriesData = useCountriesData();

  return (
    <>
      <Header title="Where is the world?" />
      <Main>
        <Filters />
        <Countries countriesData={countriesData} />
      </Main>
    </>
  );
}
