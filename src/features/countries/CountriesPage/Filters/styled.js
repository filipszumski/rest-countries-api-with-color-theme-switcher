import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px;
`;

export const Input = styled.input`
    padding: 15px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.elements};
    border: none;
    box-shadow: 1px 1px 5px 0px ${({ theme }) => theme.colors.input};

    ${({ search }) => search && css`
        flex: 0 1 200px;
        margin-right: 20px;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        flex: 1 0 100%;
       
        ${({ search }) => search && css`
        margin-bottom: 30px;
    `}
    }
`;