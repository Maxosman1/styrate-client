import styled from "styled-components";

export const HomepageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 10px;
    & form{
        & *{
            margin-bottom: 10px;
        }
        & input,& button, & select{
            border: 1px solid black;
            border-radius: 3px;
            &button{
                margin-right: 20px;
            }
        }
    }
    & a{
        color: blue; text-decoration: underline;
        width: fit-content;
    }
`