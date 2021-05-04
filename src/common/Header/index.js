import React from "react";
import { StyledHeader } from "./styled";

export const Header = ({ title, themeName, toggleThemeName }) => {

    return (
        <StyledHeader>
            <h1>{title}</h1>
            <button onClick={() => toggleThemeName()}>{themeName} Theme</button>
        </StyledHeader>
    )
};