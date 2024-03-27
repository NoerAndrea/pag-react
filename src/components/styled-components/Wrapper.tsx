import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;  
    padding: 24px;
    text-align: center;

    p {
        font-size: 1.25rem;
        font-weight: 300;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 1rem;
        line-height: 1.5;
    }

    @media (min-width: 1140px) {
        width: 50%;
        text-align: start;
    }
`;