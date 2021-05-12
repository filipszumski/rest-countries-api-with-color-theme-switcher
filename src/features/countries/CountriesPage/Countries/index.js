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
import { Loading } from "../../../../common/Loading";


export const Countries = ({ countriesData, selectCountries }) => {

    return (
        <Wrapper loading={countriesData.state === "loading"}>
            {countriesData.state === "loading"
                ? (
                    <Loading />
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