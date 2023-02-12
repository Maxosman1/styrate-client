import styled from "styled-components";

export const CommentSectionContainer = styled.div`
    width: 80%;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    & h3{
        margin: 20px 0;
        padding: 10px;
        color: white;
        background-color: black;
        font-size: 1.3em; 
        border-radius: 5px;
    }
    & .commentList{
        width: 100%;
        & .comment{
            width: 100%;
            margin-bottom: 20px;
            display: flex; flex-direction: column;
            align-items: flex-start;
            border-radius: 10px;
            box-shadow: 0 0 5px #BBBBBB;
            box-sizing: border-box;
            padding: 10px;
            & .meta{
                margin-bottom: 10px;
                & span{
                    font-weight: 600;
                }
            }
        }

    }
`