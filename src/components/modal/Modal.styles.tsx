import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 4px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 10px;
`;

export const VotesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const VotesLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const VotesCount = styled.span`
  margin-right: 10px;
`;

export const Score = styled.span`
  font-weight: bold;
`;

export const CloseButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
  margin-top: 20px;
  &:hover {
    background-color: #354b7f;
    cursor: pointer;
  }
`;
