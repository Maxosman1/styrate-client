import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    background-color: #EEEEEE;
    box-shadow: 0 0 5px #BBBBBB;
    & nav{
        width: 95%; height: 100%;
        & ul{
            display: flex;
            align-items: center;
            height: 100%;
            & li{
                height: 100%;
                display: flex; align-items: center; justify-content: center;
                & > *{
                    width: 100px;
                    height: 100%;
                    outline: unset;
                    display: flex; align-items: center; justify-content: center;
                    padding: 0 10px;
                    &:hover{
                        background-color: #BBBBBB;
                    }
                }
                & h2{
                    font-size: 1.3em;
                    font-weight: 600;
                }
            }
        }
    }
`