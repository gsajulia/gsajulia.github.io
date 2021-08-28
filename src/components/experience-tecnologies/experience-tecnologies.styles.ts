import styled from "styled-components/macro";
interface Props {
  moreSpacing?: boolean;
}

export const ContainerTechImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${(props: Props) =>
    props.moreSpacing ? "30px 10px 30px 10px" : "0 0 10px 0"};
`;
