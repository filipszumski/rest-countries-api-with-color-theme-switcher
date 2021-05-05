import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: space-evenly;
    gap: 50px
`;

export const Item = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.elements};
    box-shadow: 1px 1px 5px 0px ${({ theme }) => theme.colors.input};
`;

export const Flag = styled.img`
    height: 120px;
    width: 200px;
    object-fit: cover;
`;

export const CountryName = styled.h2`
    margin: 15px 0px 15px 15px;
    font-size: ${({ theme }) => theme.fontSize.desktopCountryName}px;
    font-weight: ${({ theme }) => theme.fontWeights.extraBold}
`;

export const CountryInfo = styled.p`
    flex: 1 0 100%;
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

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
`;