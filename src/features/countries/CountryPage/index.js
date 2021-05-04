import React from "react";
import { useParams } from "react-router";


export const CountryPage = ({ countriesData }) => {
    const { name } = useParams();
    let selectedCountry;

    if (countriesData.state === "success") {
        selectedCountry = countriesData.countries.find(country => country.name === name);
    };

    return (
        <>
            {countriesData.state === "success" && (
                <h1>{selectedCountry.name}</h1>
            )}
        </>
    )
}