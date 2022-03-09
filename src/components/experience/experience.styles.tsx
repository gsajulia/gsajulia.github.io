import styled from 'styled-components/macro';

export const Container = styled.div` 
    margin: 6vw 7vw 0 10vw;
    @media only screen and (max-width: 700px) {
        margin: 10px;
    }
`;

export const BoxBorder = styled.div` 
    border: 1px solid #5CE1E6;
    margin: 1vw;
    padding: 40px;
    background-color: #1f1c21;
    @media only screen and (max-width: 700px) {
        padding: 30px;
    }
`;

export const ExperienceContainer = styled.div` 
    width: 50%;
    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`;

export const ExperienceContainerLarge = styled.div` 
    width: 100%;
`;

export const BoxContainer = styled.div` 
    display: flex;
    flex-direction: row;
    margin: 5vw;
    flex-wrap: wrap;
    @media only screen and (max-width: 700px) {
        margin: 10px;
        flex-direction: column;
    }
`;

export const ContainerTechImage = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 30px 10px 30px 10px;
`;

export const Languages = styled.div` 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`;

export const LanguagesContainer = styled.div` 
    margin: 6vw 7vw 0 7vw;
    @media only screen and (max-width: 700px) {
        margin: 40px 10px 40px 10px;
    }
`;

export const TechnologiesContainer = styled.div` 
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    @media only screen and (max-width: 700px) {
        margin: 10px;
    }
`;

