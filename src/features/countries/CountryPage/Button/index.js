import React from "react";
import { Wrapper, StyledButton } from "./styled";
import { Link, useHistory } from "react-router-dom";
import { toCountries } from "../../../../routes";

export const Button = () => {
    const history = useHistory();
    const onClick = () => {
        history.goBack();
    }

    return (
        <Wrapper>
            <Link to={toCountries()}><StyledButton>Home</StyledButton></Link>
            <StyledButton onClick={onClick}>Back</StyledButton>
        </Wrapper>
    )
}