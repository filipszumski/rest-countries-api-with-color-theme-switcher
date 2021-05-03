import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    padding: 15px;
    color: ${({ theme }) => theme.colors.input};
    background-color: ${({ theme }) => theme.colors.elements};
    border: none;
    box-shadow: 0.5px 0.5px 2px 0px ${({ theme }) => theme.colors.input};

    ${({ search }) => search && css`
        flex: 0 1 300px
    `}
`;