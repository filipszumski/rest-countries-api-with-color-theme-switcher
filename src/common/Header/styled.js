import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
    font-size: ${({theme}) => theme.fontSize.title}px;
`;

export const StyledButton = styled.button`
    padding: 10px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.elements};
    border: none;
    box-shadow: 1px 1px 5px 0px ${({ theme }) => theme.colors.input};

`;