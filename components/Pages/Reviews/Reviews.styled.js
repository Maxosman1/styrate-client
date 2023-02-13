import styled from "styled-components";

export const ReviewsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 300px;
    & .filter-container{
        /* background-color: white; */
        width: 100%;
        margin: 10px 0;
        & label{
            margin-right: 10px;
        }
        & select{
            box-shadow: 0 0 2px #BBBBBB;
            padding: 3px 5px;
            cursor: pointer;
            &:active, &:focus{
                outline: unset;
            }
        }
    }
    & .sensor{
        border: 1px solid black;
        :focus{
            outline: none;
        }
    }
    & .reviewListContainer{
        background-color: white;
        & .loading{
            margin-top: 100px;
        }
        width: 100%;
        display: flex;
        flex-direction: column; align-items: center;
        & .review-preview{
            background-color: white;
            width: 100%;
            box-sizing: border-box;
            padding: 20px;
            box-shadow: 0 0 5px #BBBBBB;
            border-radius: 10px;;
            margin: 10px 0;
            height: fit-content;
            display: flex;
            align-items: flex-start;
            &:hover{
                cursor: pointer;
                background-color: #EFEFEF;
            }
            &:focus, &:active{
                background-color: white;
            }
            & iframe{
                width: min-content;
                height: 300px;
                margin-right: 20px;
                border-radius: 5px;
            }
            & .textOuter{
                height: fit-content;
                flex-grow: 1;
                display: flex; align-items: center;
                & .textInner{
                    flex-grow: 1;
                    min-height: 300px;
                    display: flex; flex-direction: column;
                    height: 100%; justify-content: flex-start;
                    & .reviewContent{
                        margin-top: 20px;
                        line-height: 1.5;
                    }
                    & .title{
                        font-size: 1.3em;
                        margin-bottom: 10px;
                    }
                    & .username{
                        font-size: 0.8em;
                        background-color: black;
                        border-radius: 5px;
                        padding: 3px 5px;
                        color: white;
                        width: fit-content;
                    }
                    & .type{
                        font-style: italic;
                    }
                    & .innerIframe{
                        display: none;
                    }
                }
                & .buttonContainer{
                    height: 100%;
                    display: flex; 
                    flex-direction: column;
                    padding: 0 0 0 20px;
                    & button{
                        height: fit-content; width: 120px;
                        padding: 20px;
                        border-radius: 5px;
                        cursor:pointer;
                        margin-bottom: 20px;
                        background-color: #DDDDDD;
                        outline: 0;
                        cursor: pointer;
                        &:hover{
                            background-color: #CCCCCC;
                        }
                        &.clicked{
                            background-color: #CCCCCC;
                        }
                    }
                }
            }
        }
    }
    @media all and (max-width: 850px){
        & .reviewListContainer{
            & .review-preview{
                & .textOuter{
                    flex-direction: column;
                    align-items: flex-start;
                    flex-shrink: 1;
                    & .textInner{
                        flex-shrink: 1;
                        min-height: unset;
                        height: fit-content;
                        margin-bottom: 30px;
                    }
                    
                    & .buttonContainer{
                        flex-direction: row;
                        padding: 0;
                        & button{
                            margin: 0;
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    }
    @media all and (max-width: 700px){
        & .reviewListContainer{
            & .review-preview{
                & > iframe{
                    display: none;
                    width: fit-content;
                    flex-grow: 0;
                }
                & .textOuter{
                    flex-direction: column;
                    align-items: center;
                    & .textInner{
                        align-items: center;
                        & .innerIframe{
                            display: flex;
                            margin: 0;
                            margin-bottom: 20px;
                            width: min-content;
                        }
                        & .type{
                            margin-bottom: 20px;
                        }
                    }
                    & .buttonContainer{
                        flex-direction: row;
                        & button{
                            &:first-of-type{
                                margin-right: 20px;
                            }
                        }
                    }
                }
            }
        }
    }
`