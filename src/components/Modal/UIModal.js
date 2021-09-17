import React from "react";
import { Overlay, Main } from "./styled";
const portalRoot = document.getElementById("portal-root");
var ReactDOM = require("react-dom");

const UIModal = ({ children, isOpen }) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Main>{children}</Main>
    </Overlay>,
    portalRoot
  );
};

export default UIModal;
