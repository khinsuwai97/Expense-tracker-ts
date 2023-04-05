import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import useExpenseContext from '../../context/useExpenseContext';
import './Modal.css';

const portalElement = document.getElementById('overlay') as HTMLElement;

const BackDrop = () => {
  const { closeEditForm } = useExpenseContext();

  return <div className="backdrop" onClick={closeEditForm}></div>;
};

const ModalOverlay: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="modal">
      <div>{children}</div>
    </div>
  );
};

const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {createPortal(<BackDrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
