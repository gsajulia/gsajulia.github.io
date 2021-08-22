import styled from 'styled-components/macro';

export const BoxBorder = styled.div` 
    border: 1px solid #5CE1E6;
    margin: 1vw;
    padding: 40px;
    background-color: #1f1c21;
    @media only screen and (max-width: 700px) {
        padding: 30px;
    }
`;

export const BoxContainer = styled.div` 
    display: flex;
    flex-direction: row;
    margin: 5vw;
    @media only screen and (max-width: 700px) {
        margin: 10px;
        flex-direction: column;
    }
`;

export const SmallSpan = styled.span` 
    font-size: 15px;
    color: #e0e0e0;
`;

export const IdeaContainer = styled.span` 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleContainer = styled.div` 
    display: flex;
    justify-content: space-between;
`;

export const ContainerImage = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;
