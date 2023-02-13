import styled from "styled-components";

export const PageFormatContainer = styled.div` 
    width: 100%;
    display: flex; flex-direction: column;
    & .pageFormat.inner{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`