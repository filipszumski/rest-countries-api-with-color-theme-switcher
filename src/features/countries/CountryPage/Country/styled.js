import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    margin: 30px;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(2, 1fr);

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        grid-template-columns: 1fr;
        gap: 15px;
    }
`;

export const FlagContainer = styled.div`
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        justify-self: center;
    }
`;

export const Flag = styled.img`
    width: 100%;
    max-width: 500px;
    object-fit: cover;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        max-width:400px;
    }
`;

export const CoutryDataContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px){
        grid-template-columns: 1fr;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const CountryName = styled.h2`
    margin: 15px 0px;
    font-size: ${({ theme }) => theme.fontSize.detailPageCountryName}px;
    font-weight: ${({ theme }) => theme.fontWeights.extraBold}
`;

export const BorderCountriesContainer = styled.p`
    display: flex;
    flex-wrap: wrap;
`;

export const PropertyName = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};

    ${({ borders }) => borders && css`
    align-self: center;
    margin-right: 10px;
    margin-bottom: 10px;
    `}
`;

export const StyledLink = styled(Link)`
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px;
    box-shadow: 1px 1px 5px 0px ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.elements};
`;