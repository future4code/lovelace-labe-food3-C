import React from "react";
import { LoadingContainer } from "./styled";
import ReactLoading from "react-loading";
import { primaryColor } from "../../constants/colors";

const Loading = () => {
  return (
    <LoadingContainer>
      <ReactLoading
        type={"spinningBubbles"}
        color={primaryColor}
        height={425}
        width={350}
      />
    </LoadingContainer>
  );
};

export default Loading;
