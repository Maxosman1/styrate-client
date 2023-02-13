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
        & label{
            margin-right: 10px;
        }
        & input{
            width: min(300px, 80%)
        }
        & input,& button, & select{
            border: 1px solid black;
            border-radius: 3px;
        }
        & select{
            padding: 3px 5px;
        }
        & button{
            padding: 5px 10px;
        }
        & button:first-of-type{
            margin-right: 20px;
        }
    }
    & a{
        color: blue; text-decoration: underline;
        width: fit-content;
    }
`