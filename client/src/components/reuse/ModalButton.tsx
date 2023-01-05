import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const ModalButton = ({ children, onClick }: Props) => {
  return (
    <button
      className="self-center w-20 h-8 m-2 font-bold text-white rounded-lg bg-likesGray hover:bg-inputFontGray"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ModalButton;
