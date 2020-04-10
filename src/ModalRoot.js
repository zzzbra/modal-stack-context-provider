import React from "react";
import { useModal } from "./useModal";

const ModalRoot = () => {
  const { modalStack, popModal } = useModal();

  if (modalStack.length === 0) return null;

  const { component: Component, props } = modalStack[modalStack.length - 1];

  return <Component {...props} onRequestClose={popModal} />;
};

export default ModalRoot;
