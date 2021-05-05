import React from "react";
import { Wrapper, StyledButton } from "./styled";
import { Link } from "react-router-dom";
import { toCountries } from "../../../../routes";

export const Button = () => (
    <Wrapper>
        <Link to={toCountries()}><StyledButton>Back</StyledButton></Link>
    </Wrapper>
)