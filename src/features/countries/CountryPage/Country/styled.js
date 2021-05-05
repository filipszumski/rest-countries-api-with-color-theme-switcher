import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 30px;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(2, 1fr);

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        grid-template-columns: 1fr;
        padding: 20px;
        gap: 20px;
    }
`;

export const FlagContainer = styled.div`
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        justify-self: center;
    }
`;

export const Flag = styled.img`
    width: 100%;
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

export const PropertyName = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;