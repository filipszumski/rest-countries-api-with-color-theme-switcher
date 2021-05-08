import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    margin: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-content: space-evenly;
    gap: 75px;
`;

export const Item = styled.div`
    background-color: ${({ theme }) => theme.colors.elements};
    box-shadow: 1px 1px 5px 0px ${({ theme }) => theme.colors.input};
    border-radius: 5px;
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
`;

export const FlagContainer = styled.div`
    position: relative;
    height: 0;
    width: 100%;
    padding-bottom: 56.25%;
`;

export const Flag = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const CountryName = styled.h2`
    margin: 15px 0px 15px 15px;
    font-size: ${({ theme }) => theme.fontSize.desktopCountryName}px;
    font-weight: ${({ theme }) => theme.fontWeights.extraBold}
`;

export const CountryInfo = styled.p`
    margin: 5px 0px 5px 15px;

    ${({ first }) => first && css`
        margin-top: 0px
    `}

    ${({ last }) => last && css`
        margin-bottom: 15px;
    `}
`;

export const PropertyName = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;