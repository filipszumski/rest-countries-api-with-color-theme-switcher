import React, { useState } from "react";
import { Main } from "../../../common/Main";
import { Filters } from "./Filters";
import { Countries } from "./Countries";
import { filterQueryParamName } from "../../filterQueryParamName";
import { useQueryParameter } from "../queryParameter";

export function CountriesPage({ countriesData }) {
  const [region, setRegion] = useState("");
  const queryParameter = useQueryParameter(filterQueryParamName);
 
  return (
    <Main>
      <Filters setRegion={setRegion} region={region} queryParameter={queryParameter} />
      <Countries countriesData={countriesData} region={region} queryParameter={queryParameter} />
    </Main>
  );
}
