import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full h-full p-6 overflow-auto">
                <button className="absolute top-4 right-4 text-black" onClick={onClose}>
                X
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;