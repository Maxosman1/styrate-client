import styled from "styled-components";

export const CommentSectionContainer = styled.div`
    width: 100%;
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
            font-size: 1.3em; 
            font-weight: 500;
            margin: 20px 0;
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
        margin: 0px 0 20px 0;
        background-color: #EEEEEE;
        box-shadow: 0 0 5px #BBBBBB;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        & *{
            border-radius: 5px;;
        }
        & input{
            width: 200px;
            margin-bottom: 20px;
            padding: 10px;
            box-shadow: 0 0 3px #BBBBBB;
        }
        & textarea{
            box-sizing: border-box;
            width: 100% !important;
            height: 100px !important;
            resize: none;
            padding: 10px;
            box-shadow: 0 0 3px #BBBBBB;
        }
        & .message{
            width: fit-content;
            margin-top: 10px;
            border: 0; outline: 0;
        }
        & button{
            margin-top: 20px;
            width: fit-content;
            padding: 15px;
            border-radius: 5px;
            cursor: pointer;
            background-color:#DDDDDD;
            &:hover{
                background-color: #BBBBBB;
            }
        }
    }

    @media all and (max-width: 700px){
        & .newComment{
            & input{
                box-sizing: border-box;
                width: 100%;
            }
        }
    }
`
