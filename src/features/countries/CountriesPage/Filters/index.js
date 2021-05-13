import React from "react";
import { useHistory, useLocation } from "react-router";
import { Wrapper, Input } from "./styled";
import { filterQueryParamName } from "../../../filterQueryParamName";

export const Filters = ({ setRegion, region }) => {

    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    const onInputChange = ({ target }) => {

        if (target.value.trim() === "") {
            searchParams.delete(filterQueryParamName);
        } else {
            searchParams.set(filterQueryParamName, target.value)
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    }

    return (
        <Wrapper>
            <Input
                search
                placeholder='Search for a country...'
                name="country"
                type="text"
                value={searchParams.get(filterQueryParamName) || ""}
                onChange={onInputChange}
            />
            <Input
                as="select"
                name="region"
                value={region}
                onChange={({ target }) => setRegion(target.value)}
            >
                <option value="">{region ? "All" : "Filter by region"}</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                <option value="polar">Polar</option>
            </Input>
        </Wrapper>
    )
};