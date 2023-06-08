import React, { useState, useRef, useEffect } from "react";

import {
  DropdownArrow,
  DropdownButton,
  DropdownContent,
  DropdownOption,
  DropdownWrapper,
} from "./Dropdown.styled";

interface IDropdownMenu {
  options: string[];
  handleFilterSelection: (option: string) => void;
  selectedOption: string;
}

const DropdownMenu = ({
  options,
  handleFilterSelection,
  selectedOption,
}: IDropdownMenu) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
    handleFilterSelection(option);
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption ?? "Dropdown Button"}
        <DropdownArrow isOpen={isOpen} />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownOption key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownOption>
        ))}
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default DropdownMenu;
