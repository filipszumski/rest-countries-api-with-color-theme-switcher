import React from "react";
import { useParams } from "react-router";
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
                    <section>
                        <button>Back</button>
                    </section>
                    <section>
                        <div>
                            <img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`}></img>
                        </div>
                        <div>
                            <h2>{selectedCountry.name}</h2>
                            <div>
                                <p><span>Native Name: </span>{selectedCountry.nativeName}</p>
                                <p><span>Population: </span>{selectedCountry.population}</p>
                                <p><span>Region: </span>{selectedCountry.region}</p>
                                <p><span>Sub Region: </span>{selectedCountry.subregion}</p>
                                <p><span>Capital: </span>{selectedCountry.capital}</p>
                                <p><span>Native Top Level Domain: </span>{selectedCountry.topLevelDomain}</p>
                                <p><span>Currencies: </span>{selectedCountry.nativeName}</p>
                                <p><span>Languages: </span>{selectedCountry.nativeName}</p>
                            </div>
                            <div>
                                <p><span>Border Countires: </span></p>
                            </div>
                        </div>
                    </section>
                </Main>
            )}
        </>
    )
}