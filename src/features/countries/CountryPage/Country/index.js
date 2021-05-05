import React from "react";
import { Wrapper, Container, Flag } from "./styled";

export const Country = ({ selectedCountry }) => (
    <Wrapper>
        <Container>
            <Flag src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`}></Flag>
        </Container>
        <Container>
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
        </Container>
    </Wrapper>
)