import React from "react";
import { StyledHeader, HeaderTitle, StyledButton } from "./styled";

export const Header = ({ title, themeName, toggleThemeName }) => {

    return (
        <StyledHeader>
            <HeaderTitle>{title}</HeaderTitle>
            <StyledButton onClick={() => toggleThemeName()}>{themeName}&nbsp;Theme</StyledButton>
        </StyledHeader>
    )
};