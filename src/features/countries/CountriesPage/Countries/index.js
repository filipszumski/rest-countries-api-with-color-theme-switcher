import React from "react";
import { useLocation } from "react-router";
import {
    Wrapper,
    Item,
    Flag,
    CountryName,
    CountryInfo,
    PropertyName,
    StyledLink
} from "./styled";
import { toCountry } from "../../../../routes";
import { filterQueryParamName } from "../../../filterQueryParamName";

export const Countries = ({ countriesData }) => {
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
                        countriesData.state === "success" && selectCountriesByQuery().map((country) => (

                            <Item key={country.name}>
                                <StyledLink to={toCountry(country.name)}>
                                    <Flag src={country.flag} alt={country.name}></Flag>
                                    <CountryName>{country.name}</CountryName>
                                    <CountryInfo first><PropertyName >Population: </PropertyName>{country.population}</CountryInfo>
                                    <CountryInfo><PropertyName>Region: </PropertyName>{country.region}</CountryInfo>
                                    <CountryInfo last><PropertyName t>Capital: </PropertyName>{country.capital}</CountryInfo>
                                </StyledLink>
                            </Item>

                        ))
                    )
            }
        </Wrapper >
    )
}