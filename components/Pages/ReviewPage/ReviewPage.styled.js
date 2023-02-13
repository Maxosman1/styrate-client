import styled from "styled-components";

export const ReviewPageContainer = styled.div`
    display: flex; flex-direction: column; align-items: center;
    width: 100%;
    & .links{
        width: 100%;
        display: flex;
        margin: 10px 0;
        & a{
            margin-right: 20px;
            color: blue;
            text-decoration: underline;
        }
    }
    & .content{
        width: 100%;
        & h1{
            font-weight: 600;
            margin: 20px 0;
            font-size: 1.3em;
        }
        & .contentInner{
            display: flex;
            flex-direction: row;
            & iframe{
                height: 500px;
                width: auto;
                margin-right: 40px;
            }
            & .text{
                display: flex; 
                flex-direction: column;
                & .topLevel{
                    display: flex; flex-direction: column;
                    & strong{
                        all: inherit;
                        display: inline;
                        font-weight: 600;
                    }
                    margin-bottom: 40px;
                }
                & .reviewText{
                    margin-bottom: 40px;
                }
                & .buttons{
                    display: flex;
                    & *:not(span){
                        background-color: #DDDDDD;
                        padding: 20px;
                        /* border: 1px solid black; */
                        color: black;
                        text-decoration: none;
                        margin-right: 20px;
                        &:hover{
                            cursor: pointer;
                            background-color: #CCCCCC;
                        }
                    }
                }
            }
        }
    }
`