import styled from 'styled-components/macro';

export const Footer = styled.div` 
    background-color: #000;
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
`;

export const SmallTextContainer = styled.div` 
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SiteReference = styled.a` 
    color: #B485FF;
    text-decoration:none;
    &:hover {
        color: #c39dff; 
    }
`;

export const SiteReferenceContainer = styled.div` 
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    color: #e0e0e0;
`;

export const EmailContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

