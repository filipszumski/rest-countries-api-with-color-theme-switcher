import React from "react";
import { toCountry } from "../../../../routes";
import {
    Wrapper,
    FlagContainer,
    Flag,
    CoutryDataContainer,
    CountryName,
    PropertyName,
    StyledLink,
    BorderCountriesContainer,
} from "./styled";

export const Country = ({ selectedCountry, selectedCountryLaguages, selectedCountryBordersNames }) => (
    <Wrapper>
        <FlagContainer>
            <Flag src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`}></Flag>
        </FlagContainer>
        <div>
            <CountryName>{selectedCountry.name}</CountryName>
            <CoutryDataContainer>
                <p><PropertyName>Native Name: </PropertyName>{selectedCountry.nativeName}</p>
                <p><PropertyName>Population: </PropertyName>{selectedCountry.population}</p>
                <p><PropertyName>Region: </PropertyName>{selectedCountry.region}</p>
                <p><PropertyName>Sub Region: </PropertyName>{selectedCountry.subregion}</p>
                <p><PropertyName>Capital: </PropertyName>{selectedCountry.capital}</p>
                <p><PropertyName>Native Top Level Domain: </PropertyName>{selectedCountry.topLevelDomain}</p>
                <p><PropertyName>Currencies: </PropertyName>{selectedCountry.nativeName}</p>
                <p><PropertyName>Languages: </PropertyName>{selectedCountryLaguages.join(", ")}</p>
            </CoutryDataContainer>
            <div>
                <BorderCountriesContainer>
                    <PropertyName list>
                        Border Countires:
                    </PropertyName>
                    {selectedCountryBordersNames.map(countryName => (
                        <StyledLink to={toCountry(countryName)}>{countryName}</StyledLink>
                    ))}

                </BorderCountriesContainer>
            </div>
        </div>
    </Wrapper>
)