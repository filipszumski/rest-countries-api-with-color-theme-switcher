import React from "react";
import { Wrapper, Input } from "./styled";

export const Filters = () => (
    <Wrapper>
        <Input
            search
            placeholder='Seach for a country...'
            name="country"
            type="text"
        />
        <Input
            as="select"
            name="region"
        >
            <option value="" selected hidden>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </Input>
    </Wrapper>
);