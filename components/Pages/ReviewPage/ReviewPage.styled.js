import styled from "styled-components";

export const ReviewPageContainer = styled.div`
    display: flex; flex-direction: column; align-items: center;
    width: 100%;
    & .links{
        width: 80%;
        display: flex;
        margin: 10px 0;
        & a{
            margin-right: 20px;
            color: blue;
            text-decoration: underline;
        }
    }
`