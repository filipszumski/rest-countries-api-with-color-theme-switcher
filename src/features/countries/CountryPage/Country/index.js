import React from "react";
import { Wrapper, FlagContainer, Flag, CoutryDataContainer } from "./styled";

export const Country = ({ selectedCountry }) => (
    <Wrapper>
        <FlagContainer>
            <Flag src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`}></Flag>
        </FlagContainer>
        <div>
            <h2>{selectedCountry.name}</h2>
            <CoutryDataContainer>
                <p><span>Native Name: </span>{selectedCountry.nativeName}</p>
                <p><span>Population: </span>{selectedCountry.population}</p>
                <p><span>Region: </span>{selectedCountry.region}</p>
                <p><span>Sub Region: </span>{selectedCountry.subregion}</p>
                <p><span>Capital: </span>{selectedCountry.capital}</p>
                <p><span>Native Top Level Domain: </span>{selectedCountry.topLevelDomain}</p>
                <p><span>Currencies: </span>{selectedCountry.nativeName}</p>
                <p><span>Languages: </span>{selectedCountry.nativeName}</p>
            </CoutryDataContainer>
            <div>
                <p><span>Border Countires: </span></p>
            </div>
        </div>
    </Wrapper>
)