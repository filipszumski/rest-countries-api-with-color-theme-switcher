import React from "react";
import { useParams } from "react-router";
import { Button } from "./Button";
import { Country } from "./Country";
import { Main } from "../../../common/Main";


export const CountryPage = ({ countriesData }) => {
    const { name } = useParams();
    let selectedCountry;

    if (countriesData.state === "success") {
        selectedCountry = countriesData.countries.find(country => country.name === name);
    };

    return (
        <>
            {countriesData.state === "success" && (
                <Main>
                    <Button />
                    <Country selectedCountry={selectedCountry} />
                </Main>
            )}
        </>
    )
}