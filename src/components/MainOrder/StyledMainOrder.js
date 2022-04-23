import styled from "styled-components";

export const StyledMainOrder = styled.div`
  &:hover: {
    background-color: red;
  }
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  min-height: 550px;
  padding: 20px 20px 20px 40px;
  position: relative;
`;

export const ContainerSteps = styled.div`
  background-color: #fffae6;
  border-radius: calc(70px / 2);
  position: absolute;
  height: 70px;
  left: 50%;
  top: -35px;
  transform: translate(-50%, 0);
  width: 500px;
  display: flex;
  align-items: center;
  padding: 20px 38px;
`;

export const Back = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 10px 0;
  width: fit-content;
  transition: all 0.5s ease-in-out;
`;

export const BoxIcon = styled.div`
  margin-right: 10px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  paddingright: 30px;
`;

export const RightSide = styled.div`
  border-left: 1px solid #ff8a00;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 300px;
  padding: 20px;
`;

export const WrapperFlex = styled.form`
  display: flex;
  height: 100%;
`;

export const RowBetween = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 5%;
  justify-content: space-between;
  padding-right: 30px;
  margin: ${(props) => (props.margin ? props.margin : "10px 0")};
`;
