import styled, { css } from "styled-components";

import { Button } from "../sidebar/Sidebar.styles";

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  width: 150px;
  margin-bottom: 10px;
`;

export const DropdownContent = styled.div<{ isOpen: boolean }>`
  background-color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  display: none;
  min-width: 80px;
  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
    `}
`;

export const DropdownArrow = styled.span<{ isOpen: boolean }>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: transform 0.3s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(-50%) rotate(180deg);
    `}
`;

export const DropdownOption = styled.div`
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 10px;

  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
`;
