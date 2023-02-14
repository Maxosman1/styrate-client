import styled from "styled-components";

export const CreateContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    & h1{
        font-size: 1.3em;
        font-weight: 500;
        margin-bottom: 20px;
    }
    & form{
        width: fit-content;
        & input, & textarea{
            padding: 10px 5px;
            border: 0;
            box-sizing: border-box;
            border-radius: 8px;
            resize: none;
            -webkit-appearance: none;
            -webkit-box-shadow: 0 0 3px #AAAAAA;
            box-shadow:0 0 3px #AAAAAA;
        }
        & select, & button{
            background-color: #EEEEEE;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
                background-color: #DDDDDD;
            }
        }
        & >div{      
            display: flex; flex-direction: column;
            margin-bottom: 10px;
            & label{
                margin-right: 10px;
            }      
            &.textReview{
                display: flex; 
                flex-direction: column;
                & textarea{
                    height: 4em;
                }
            }
            &.productType{
                flex-direction: row;
                margin: 20px 0;
                align-items: center;
            }
            &.buttonControls{
                flex-direction: row;
                margin: 30px 0;;
                & button{
                    padding: 20px;
                    &:first-of-type{
                        margin-right: 20px;
                    }
                }
            }
        }
    }
    & .review-preview{
        background-color: white;
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        box-shadow:  0 0 5px #BBBBBB;
        -webkit-appearance: none;
        -webkit-box-shadow:  0 0 5px #BBBBBB;
        border-radius: 10px;;
        margin: 10px 0;
        height: fit-content;
        display: flex;
        align-items: flex-start;
        &:hover{
            cursor: pointer;
            background-color: #EFEFEF;
        }
        &:focus{
            background-color: white;
        }
        &:active{
            background-color: #EFEFEF;
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
                & button, & a{
                    box-sizing: border-box;
                    text-decoration: none;
                    color: black;
                    height: fit-content; width: 120px;
                    padding: 20px;
                    border-radius: 5px;
                    cursor:pointer;
                    margin-bottom: 20px;
                    background-color: #DDDDDD;
                    outline: 0;
                    text-align: center;
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
    @media all and (max-width: 850px){
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
                    & button, & a{
                        margin: 0;
                        margin-right: 20px;
                    }
                }
            }
        }
        align-items: center;
        & form{
            width: 80%;
            & .productType{
                justify-content: center;
            }
            & .buttonControls{
                margin: 40px 0;;
                justify-content: center;
                & button{
                    padding: 15px !important 
                }
            }
        }
        & .content{
            width: 90%;
        }
    }
    @media all and (max-width: 700px){
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
                    & button, & a{
                        &:first-of-type{
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    }
`