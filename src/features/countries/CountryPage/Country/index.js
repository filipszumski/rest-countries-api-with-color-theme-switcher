import React from "react";
import {
    Wrapper,
    FlagContainer,
    Flag,
    CoutryDataContainer,
    CountryName,
    PropertyName
} from "./styled";

export const Country = ({ selectedCountry }) => (
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
                <p><PropertyName>Languages: </PropertyName>{selectedCountry.nativeName}</p>
            </CoutryDataContainer>
            <div>
                <p><PropertyName>Border Countires: </PropertyName></p>
            </div>
        </div>
    </Wrapper>
)