import styled from "styled-components";
import ImagemBanner from "../images/sea-banner.jpg"

export const Banner = styled.div`
    height: 38vh;
    background-image: linear-gradient(rgba(255, 255, 255, 0.70), rgba(255, 255, 255, 0.30)), url(${ImagemBanner});
    background-size: cover;
    background-position: center bottom;
    display: flex;
    align-items: center;
    justify-content: center; 

    div{
        h1{
            text-align: center;
            font-size: 25px;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
`