import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    background-color: white;
    position: fixed;
    top: 0; left: 0;
    z-index: 999;
    color: black;
    box-shadow:  0 0 5px #BBBBBB;
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
                        background-color: #DDDDDD;
                    }
                }
                & h2{
                    font-size: 1em;
                    font-weight: 600;
                }
            }
        }
    }
`