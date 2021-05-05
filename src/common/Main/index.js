import React from "react";
import { StyledMain } from "./styled";

export const Main = ({ children }) => (
    <StyledMain className="main">
        {children}
    </StyledMain>
)