import React from "react";
import { useParams } from "react-router";
import { Button } from "./Button";
import { Country } from "./Country";
import { Main } from "../../../common/Main";


export const CountryPage = ({ countriesData }) => {
    const { name } = useParams();
    let selectedCountry;
    let selectedCountryLaguages;
    let selectedCountryBordersNames;

    if (countriesData.state === "success") {
        selectedCountry = countriesData.countries.find(country => country.name === name);
        selectedCountryLaguages = selectedCountry.languages.map(language => language.name);
        selectedCountryBordersNames = selectedCountry.borders
            .map(countryShotName => countriesData.countries
                .find(country => country.alpha3Code === countryShotName).name)
    };

    return (
        <>
            {countriesData.state === "success" && (
                <Main>
                    <Button />
                    <Country
                        selectedCountry={selectedCountry}
                        selectedCountryLaguages={selectedCountryLaguages}
                        selectedCountryBordersNames={selectedCountryBordersNames}
                    />
                </Main>
            )}
        </>
    )
}