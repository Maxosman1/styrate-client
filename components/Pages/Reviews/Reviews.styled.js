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
        margin: 10px 0;;
        & a{
            color: blue; text-decoration: underline;
            margin-left: 20px;
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
            margin: 40px 0;
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
            height: 340px;
            display: flex;
            align-items: center;
            & iframe{
                height: 100%;
                margin-right: 20px;
                border-radius: 5px;
            }
            & .text{
                height: 100%;
                width: 60%;
                display: flex; flex-direction: column;
                height: 100%; justify-content: flex-start;
                margin-right: 20px;
                & .reviewContent{
                    margin-top: 20px;
                }
                & a{
                    text-decoration: underline;
                    &:focus{
                        outline: none;
                    }
                }
            }
            & button{
                height: fit-content; width: fit-content;
                padding: 20px;
                cursor:pointer;

            }
        }
    }
`