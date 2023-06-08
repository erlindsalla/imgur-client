import React, { useState } from "react";

import { IImage } from "../../utils/types";
import Modal from "../modal/Modal";

import { ImageContainer, Description, ImageDisplay } from "./Image.styled";

interface IImageObject {
  image: IImage;
  key?: number;
}

const Image = ({ image, key }: IImageObject) => {
  const { link, description } = image;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ImageContainer key={key} onClick={() => setIsOpen(true)}>
        <ImageDisplay src={link} />
        {description && <Description>{description}</Description>}
      </ImageContainer>
      {isOpen && <Modal image={image} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Image;
