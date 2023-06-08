import styled from "styled-components";

export const ToggleContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const ToggleInput = styled.input`
  appearance: none;
  width: 30px;
  height: 15px;
  border-radius: 15px;
  background-color: ${(props) => (props.checked ? "#4CAF50" : "#ccc")};
  position: relative;
  outline: none;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    top: -3px;
    left: ${(props) => (props.checked ? "15px" : "0")};
    transition: left 0.3s;
  }
`;

export const ToggleLabel = styled.span`
  margin-left: 10px;
`;
