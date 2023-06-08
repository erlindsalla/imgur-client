import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import { IImage } from "../../utils/types";
import { ImageDisplay } from "../image/Image.styled";

import {
  ModalContainer,
  ModalContent,
  ImageContainer,
  Title,
  Description,
  VotesContainer,
  VotesLabel,
  VotesCount,
  CloseButton,
  Score,
} from "./Modal.styles";

interface ModalProps {
  image: IImage;
  onClose: () => void;
}

const Modal = ({ image, onClose }: ModalProps) => {
  const { link, title, description, ups, downs, score } = image;

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ModalContainer>
      <ModalContent ref={modalRef}>
        <ImageContainer>
          <ImageDisplay src={link} />
        </ImageContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <VotesContainer>
          <VotesLabel>
            <FaArrowUp /> Upvotes:
          </VotesLabel>
          <VotesCount>{ups}</VotesCount>
          <VotesLabel>
            <FaArrowDown /> Downvotes:
          </VotesLabel>
          <VotesCount>{downs}</VotesCount>
          <VotesLabel>Score:</VotesLabel>
          <Score>{score}</Score>
        </VotesContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
