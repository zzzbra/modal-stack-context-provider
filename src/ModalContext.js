import React, { useState, createContext } from "react";

export const ModalContext = createContext({
  modalStack: [],
  showModal: () => {},
  hideModal: () => {}
});

export const ModalProvider = ({ children }) => {
  const [modalStack, setModalStack] = useState([]);

  const pushModal = (component, props = {}) => {
    setModalStack([...modalStack, { component, props }]);
  };

  const popModal = () => {
    const poppedModalStack = modalStack.slice(0, -1);
    setModalStack(poppedModalStack);
  };

  const state = {
    modalStack,
    pushModal,
    popModal
  };

  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};

export const ModalConsumer = ModalContext.Consumer;
