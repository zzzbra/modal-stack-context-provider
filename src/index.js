import React from "react";
import { render } from "react-dom";
import Modal from "react-modal";
import { ModalProvider, ModalConsumer } from "./ModalContext";
import { useModal } from "./useModal";
import ModalRoot from "./ModalRoot";

const Modal1 = ({ onRequestClose, ...otherProps }) => {
  const { pushModal } = useModal();
  return (
    <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
      <button onClick={onRequestClose}>close</button>
      <div>I am a modal</div>
      <button onClick={() => pushModal(Modal2, { foo: "bar" })}>
        Open Second Modal
      </button>
    </Modal>
  );
};

const Modal2 = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal
    isOpen
    onRequestClose={onRequestClose}
    style={{
      content: {
        width: "200px",
        height: "200px"
      }
    }}
    {...otherProps}
  >
    <button onClick={onRequestClose}>close</button>
    <div>second modal {foo}</div>
  </Modal>
);

const App = () => (
  <ModalProvider>
    <ModalRoot />
    <ModalConsumer>
      {({ pushModal }) => (
        <button onClick={() => pushModal(Modal1)}>Open Modal</button>
      )}
    </ModalConsumer>
  </ModalProvider>
);

render(<App />, document.getElementById("root"));
