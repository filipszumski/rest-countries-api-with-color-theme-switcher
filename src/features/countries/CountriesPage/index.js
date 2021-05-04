import React from "react";
import { Main } from "../../../common/Main";
import { Filters } from "./Filters";
import { Countries } from "./Countries";

export function CountriesPage({ countriesData }) {

  return (
    <Main>
      <Filters />
      <Countries countriesData={countriesData} />
    </Main>
  );
}
