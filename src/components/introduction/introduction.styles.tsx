import styled from 'styled-components/macro';

export const ContainerIntroduction = styled.div` 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`;

export const TextContainer = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 8vw 8vw 0 0;
`;

export const Container = styled.div` 
    margin: 3vw 7vw 0 10vw;
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
`;
