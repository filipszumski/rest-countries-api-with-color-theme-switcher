import React from "react";
import { Wrapper, Item, Flag, CountryName, CountryInfo, PropertyName } from "./styled";


export const Countries = ({ countriesData }) => {

    return (
        <Wrapper>
            {countriesData.state === "loading"
                ? (
                    <p>Trwa ładowanie...</p>
                )
                : countriesData.state === "error"
                    ? (
                        <p>Wystąpił błąd podczas pobierania danych</p>
                    )
                    : (
                        countriesData.countries.map((country) => (
                            <Item key={country.name}>
                                <Flag src={country.flag} alt={country.name}></Flag>
                                <CountryName>{country.name}</CountryName>
                                <CountryInfo first><PropertyName >Population: </PropertyName>{country.population}</CountryInfo>
                                <CountryInfo><PropertyName>Region: </PropertyName>{country.region}</CountryInfo>
                                <CountryInfo last><PropertyName t>Capital: </PropertyName>{country.capital}</CountryInfo>
                            </Item>
                        ))
                    )
            }
        </Wrapper >
    )
}