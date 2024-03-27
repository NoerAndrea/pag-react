import styled from "styled-components";

export const FinishPage = styled.div`
    height: 15vh;    
    background-size: cover;
    background-position: center bottom;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    flex-direction: row;

    div{
        display: flex; 
        align-items: center;
        margin-left: 10px;
        p{
            font-size: 15px;
            color: #0054b4;
            font-family: Arial, Helvetica, sans-serif;
        }
        small{
            padding-top: 5px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
`