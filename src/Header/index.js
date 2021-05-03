import React from "react";
import { StyledHeader } from "./styled";

export const Header = ({ title }) => (
    <StyledHeader>
        <h1>{title}</h1>
        <span className="header__toggleThemeButton">Ligth Mode</span>
    </StyledHeader>
);