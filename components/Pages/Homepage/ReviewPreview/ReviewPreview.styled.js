import styled from "styled-components";

export const ReviewPreviewContainer = styled.div`
    margin-left: 10px;
    display: flex;
    & .review-preview {
        width: 100%;
        border: 1px solid black; border-left: 0; border-right: 0;
        padding: 10px 0;
        margin: 10px 0;
        height: 200px;
        display: flex;
        align-items: center;
        & iframe{
            height: 100%;
            margin-right: 20px;
        }
        & .text{
            width: 60%;
            display: flex; flex-direction: column;
            height: 100%; justify-content: flex-start;
            margin-right: 20px;
            & .reviewContent{
                margin-top: 20px;
            }
        }
        & button{
            height: fit-content; width: fit-content;
            padding: 20px;
            cursor:pointer;

    }
`