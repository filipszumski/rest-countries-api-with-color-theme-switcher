import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
    max-width: ${({ theme }) => theme.breakpoints.desktopL}px;
    margin: 0px auto;
`;

export const HeaderTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.title}px;
`;

export const StyledButton = styled.button`
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 7px;
    align-items: center;
    margin-left: 10px;
    padding: 7px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.elements};
    border: none;
    box-shadow: 1px 1px 5px 0px ${({ theme }) => theme.colors.input};
`;

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.elements};
    box-shadow: 1px 1px 5px 0px ${({ theme }) => theme.colors.input};
`;