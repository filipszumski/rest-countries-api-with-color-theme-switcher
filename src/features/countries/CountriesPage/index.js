import React from "react";
import { useLocation } from "react-router";
import { Main } from "../../../common/Main";
import { Filters } from "./Filters";
import { Countries } from "./Countries";
import { filterQueryParamName } from "../../filterQueryParamName";

export function CountriesPage({ countriesData }) {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(filterQueryParamName);

  const selectCountriesByQuery = () => {
    if (countriesData.state === "success" && query && query.trim() !== "") {
      return countriesData.countries.filter(country => {
        const countryNameUppercased = country.name.toUpperCase();
        const queryTrimmedUppercased = query.trim().toUpperCase();

        return countryNameUppercased.includes(queryTrimmedUppercased);
      });
    }
    return countriesData.countries;
  };

  return (
    <Main>
      <Filters />
      <Countries selectCountriesByQuery={selectCountriesByQuery} countriesData={countriesData} />
    </Main>
  );
}
