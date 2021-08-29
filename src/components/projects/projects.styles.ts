import styled from 'styled-components/macro';

export const Box = styled.div` 
    border: 1px solid #5CE1E6;
    margin: 1vw;
    padding: 40px;
    background-color: #1f1c21;
    width: 100%;
`;

export const BoxContainer = styled.div` 
    display: flex;
    flex-direction: row;
    margin: 5vw;
`;

export const ContainerImage = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const TitleContainer = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextContainer = styled.div`
    margin: 20px 90px 20px 90px;
`;

export const SiteReference = styled.a` 
    color: #B485FF;
    text-decoration:none;
    &:hover {
        color: #c39dff; 
    }
`;

export const GithubReference = styled.a` 
    color: #FB87FD;
    text-decoration:none;
    &:hover {
        color: #fbb2fd; 
    }
`;

