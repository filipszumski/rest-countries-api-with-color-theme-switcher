import React from "react";
import { Wrapper, Input } from "./styled";
import { filterQueryParamName } from "../../../filterQueryParamName";
import { useReplaceQueryParameter } from "../../queryParameter";

export const Filters = ({ setRegion, region, queryParameter }) => {
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {

        replaceQueryParameter({
            key: filterQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    }

    return (
        <Wrapper>
            <Input
                search
                placeholder='Search for a country...'
                name="country"
                type="text"
                value={queryParameter || ""}
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