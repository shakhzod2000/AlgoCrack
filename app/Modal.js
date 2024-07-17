import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end items-center">
                <div className="bg-white p-4 rounded shadow-lg w-3/4 h-full">
                    <button>
                        <svg
                            style={{ position: 'absolute', top: '30', left: '350' }}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={onClose}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg> 
                    </button>
                    {children}
                </div>
            </div>
            <div
                className="fixed inset-0 flex justify-end w-1/4 h-full" // inset-0 is the same as top-0 right-0 bottom-0 left-0
                onClick={onClose}
            ></div>
        </div>
    );
};

export default Modal;