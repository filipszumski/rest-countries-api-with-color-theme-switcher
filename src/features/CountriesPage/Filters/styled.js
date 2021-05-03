import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`;

export const Input = styled.input`
    padding: 15px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.elements};
    border: none;
    box-shadow: 1px 1px 5px 0px ${({ theme }) => theme.colors.input};

    ${({ search }) => search && css`
        flex: 0 1 300px
    `}
`;