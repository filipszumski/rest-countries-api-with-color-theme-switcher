import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px
`;

export const Item = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;