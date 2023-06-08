import React from "react";

import { ToggleContainer, ToggleInput, ToggleLabel } from "./Toggle.styled";

interface IToggle {
  value: boolean;
  handleToggle: () => void;
}

const Toggle = ({ value, handleToggle }: IToggle) => {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={value} onChange={handleToggle} />
      <ToggleLabel>{value ? "true" : "false"}</ToggleLabel>
    </ToggleContainer>
  );
};

export default Toggle;
