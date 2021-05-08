import React from "react";
import {
    Wrapper,
    Item,
    Flag,
    CountryName,
    CountryInfo,
    PropertyName,
    StyledLink,
    FlagContainer,
} from "./styled";
import { toCountry } from "../../../../routes";


export const Countries = ({ countriesData, selectCountries }) => {

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
                        countriesData.state === "success" && selectCountries().map((country) => (

                            <Item key={country.name}>
                                <StyledLink to={toCountry(country.name)}>
                                    <FlagContainer>
                                        <Flag src={country.flag} alt={country.name}></Flag>
                                    </FlagContainer>
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