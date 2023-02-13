import styled from "styled-components";

export const PageFormatContainer = styled.div` 
    width: 100%;
    display: flex; flex-direction: column;
    & .pageFormat.inner{
        margin-top: 60px;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media all and (max-width: 1000px){
            width: 95%;
        }
    }
`