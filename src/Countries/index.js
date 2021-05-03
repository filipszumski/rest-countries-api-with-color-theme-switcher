import React from "react";
import { Wrapper, Item } from "./styled";

const countries = [
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
    "Polska",
];

export const Countries = () => {

    return (
        <Wrapper>
            {countries.map((country) => (
                <Item>
                    {country}
                </Item>
            ))}
        </Wrapper>
    )
}