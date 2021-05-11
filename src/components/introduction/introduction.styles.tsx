import styled from 'styled-components/macro';

export const ContainerIntroduction = styled.div` 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    @media only screen and (max-width: 700px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export const TextContainer = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 8vw 8vw 0 0;
    @media only screen and (max-width: 700px) {
        margin: 10px;
    }
`;

export const Container = styled.div` 
    margin: 3vw 7vw 0 10vw;
    @media only screen and (max-width: 700px) {
        margin: 10px 5px 0 5px;
    }
`;

export const SiteReference = styled.a` 
    color: #B485FF;
    text-decoration:none;
    &:hover {
        color: #c39dff; 
    }
`;

export const SmallTextContainer = styled.div` 
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: 700px) {
        margin: 10px;
    }
`;
