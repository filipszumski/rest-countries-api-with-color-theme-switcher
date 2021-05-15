import React, { useState } from "react";
import { Main } from "../../../common/Main";
import { Filters } from "./Filters";
import { Countries } from "./Countries";
import { filterQueryParamName } from "../../filterQueryParamName";
import { useQueryParameter } from "../queryParameter";

export function CountriesPage({ countriesData }) {
  const [region, setRegion] = useState("");
  const queryParameter = useQueryParameter(filterQueryParamName);

  const selectCountriesByRegion = () => {
    if (countriesData.state === "success" && region) {
      return countriesData.countries.filter(country => country.region.toUpperCase() === region.toUpperCase());
    }

    return countriesData.countries;
  };

  const selectCountriesByQuery = (countries) => {
    if (countriesData.state === "success" && queryParameter && queryParameter.trim() !== "") {
      return countries.filter(country => {
        const countryNameUppercased = country.name.toUpperCase();
        const queryTrimmedUppercased = queryParameter.trim().toUpperCase();

        return countryNameUppercased.includes(queryTrimmedUppercased);
      });
    }
    return countries;
  };

  const selectCountries = () => {
    const countries = selectCountriesByRegion();

    return selectCountriesByQuery(countries);
  }

  return (
    <Main>
      <Filters setRegion={setRegion} region={region} />
      <Countries selectCountries={selectCountries} countriesData={countriesData} />
    </Main>
  );
}
