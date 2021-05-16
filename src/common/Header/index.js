import React from "react";
import { StyledHeader, HeaderTitle, StyledButton, Wrapper } from "./styled";

export const Header = ({ title, themeName, toggleThemeName }) => {

    return (
        <Wrapper>
            <StyledHeader>
                <HeaderTitle>{title}</HeaderTitle>
                <StyledButton onClick={() => toggleThemeName()}>
                    {themeName === "Dark"
                        ? <ion-icon size="small" name="moon-outline"></ion-icon>
                        : <ion-icon size="small" name="sunny-outline"></ion-icon>}
                    {" "}
                    <span>{themeName}&nbsp;Theme</span>
                </StyledButton>
            </StyledHeader>
        </Wrapper>
    )
};