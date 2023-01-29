import styled from 'styled-components/macro';

export const ContainerIntroduction = styled.div` 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    @media only screen and (max-width: 1450px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export const Row = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5vw;
`;

export const TextContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-self: center;

    @media only screen and (max-width: 700px) {
        margin: 10px;
    }
`;

export const Container = styled.div` 
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 5vw 5vw 0 5vw;

    @media only screen and (max-width: 700px) {
        margin: 10px 5px 0 5px;
    }


    #world {
        animation: rotate linear 6s infinite;
        transform-origin: center; 
        transform-box: fill-box;
        stroke: #ff66c4;
    }

    #image0_206_13 {
        stroke: none;
    }

    @keyframes rotate{
        0%   {stroke: rgb(251, 135, 253);}
        25%  {stroke: #B485FF;}
        50% {stroke: #5CE1E6;}
        75%  {stroke: #B485FF;}
        100%  {stroke: rgb(216, 135, 253);}
        
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const SiteReference = styled.a` 
    color: #B485FF;
    text-decoration:none;
    margin-left: 10px;
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

export const SmallSpan = styled.span` 
    font-size: 12px;
    margin: 0 10px 0 10px;
    color: #e0e0e0;
`;
