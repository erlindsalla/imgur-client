import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";

import { fetchDataAction } from "../../redux/action/actions";
import { RootState } from "../../redux/store";
import Image from "../image/Image";

import { GalleryContainer, LoaderContainer } from "./Gallery.styles";

const Gallery = () => {
  const images = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch();

  const handleFetchData = async () => {
    try {
      const action: any = fetchDataAction();
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <GalleryContainer id="scrollableDiv">
      {images.loading ? (
        <LoaderContainer>
          <ReactLoading
            type={"cylon"}
            color={"#fff"}
            height={667}
            width={375}
          />
        </LoaderContainer>
      ) : (
        images?.data?.map((image, index) => <Image image={image} key={index} />)
      )}
    </GalleryContainer>
  );
};

export default Gallery;
