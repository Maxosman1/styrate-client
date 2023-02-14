import styled from "styled-components";

export const CreateContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    & form{
        width: fit-content;
        & input,& button, & select, & textarea{
            border: 1px solid black;
            border-radius: 3px;
            resize: none;
        }
        & input, & textarea{
            padding: 5px;
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
                & select{
                    padding: 3px 5px;
                }
            }
            &.buttonControls{
                flex-direction: row;
                & button{
                    padding: 5px 10px;
                    &:first-of-type{
                        margin-right: 20px;
                    }
                }
            }
        }
    }
    & a{
        color: blue; text-decoration: underline;
        width: fit-content;
    }
`