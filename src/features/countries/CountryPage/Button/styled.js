import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 30px;
`;

export const StyledButton = styled.button`
    width: 120px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.elements};
    border: none;
    box-shadow: 1px 1px 5px 0px ${({ theme }) => theme.colors.input};
    border-radius: 5px;

`;