import styled from "styled-components";

export const ReviewPageContainer = styled.div`
    display: flex; flex-direction: column; align-items: center;
    width: 100%;
    & .content{
        width: 100%;
        & h1{
            font-weight: 500;
            margin: 20px 0 10px 0;
            font-size: 1.5em;
        }
        & .contentInner{
            & .text{
                display: flex; 
                flex-direction: column;
                & .topLevel{
                    display: flex; flex-direction: row; align-items: center;
                    margin-bottom: 40px;
                    & p{
                        font-size: 0.9em;
                        width: fit-content;
                        &.username{
                            margin-right: 10px;
                            background-color: black;
                            color: white;
                            padding: 3px 5px;
                            border-radius: 3px;;
                        }
                        &.productType{
                            font-style: italic;
                        }
                    }
                }
                & .textAndFrame{
                    display: flex;
                    & iframe{
                        width: fit-content;
                        height: 400px;
                        margin-right: 30px;
                        border-radius: 10px;
                    }
                    & .textAndFrameInner{
                        flex-grow: 1;
                        display: flex; flex-direction: column;
                        & .reviewText{
                            margin-bottom: 20px;
                            line-height: 1.5;
                        }
                        & .buttons{
                            display: flex;
                            & *:not(span){
                                outline: none;
                                width: 120px;
                                border-radius: 5px;
                                background-color: #EEEEEE;
                                padding: 20px 0;
                                color: black;
                                text-decoration: none;
                                margin-right: 20px;
                                cursor: pointer;
                                &:hover{
                                    background-color: #CCCCCC;
                                }
                                &.disabled{
                                    background-color: #CCCCCC;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`