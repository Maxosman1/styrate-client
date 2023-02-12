import styled from "styled-components";

export const CommentSectionContainer = styled.div`
    width: 80%;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    & .title{
        width: 100%;
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        & h3{
            padding: 10px;
            color: white;
            background-color: black;
            font-size: 1.3em; 
            border-radius: 5px;
        }
        & button{
            height: fit-content;
            margin-left: auto;
            border: 0; padding: 0;
            cursor: pointer;
            text-decoration: underline;
            background-color: white;
            outline: 0;
        }
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
            padding: 20px 20px;
            & .meta{
                margin-bottom: 10px;
                & span{
                    background-color: black;
                    color: white;
                    padding: 3px 5px;
                    border-radius: 3px;
                }
            }
        }

    }
    & .newComment{
        width: 100%;
        margin: 20px 0;
        background-color: #EEEEEE;
        box-shadow: 0 0 5px #BBBBBB;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        & *{
            border: 1px solid black;
            border-radius: 5px;;
        }
        & input{
            width: 200px;
            margin-bottom: 20px;
            padding: 10px;
        }
        & textarea{
            box-sizing: border-box;
            width: 100% !important;
            height: 100px !important;
            resize: none;
            padding: 10px;
        }
    }
`
