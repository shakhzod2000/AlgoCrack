import React from "react";

const ProblemPage = ({ isOpen, onClose, problem }) => {
    if (!isOpen) return null;
    
    return (
        <main className="fixed inset-0 bg-gray-200 w-full h-full">
            <header className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md mb-1 w-full border border-gray-300">
                <h1 className="flex justify-center text-xl font-bold mb-2">⋮☰ algocrack 150</h1>
                <button className="absolute top-0 right-0 m-4 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full"
                    onClick={onClose}
                >
                    Login
                </button>
            </header>
            <section className="bg-gray-200 p-1 rounded shadow-lg w-full h-full flex">
                <div className="w-1/2 flex flex-col mr-2 bg-white justify-start shadow-lg p-4 rounded-lg border border-gray-300">
                    <div className="flex justify-start mb-4 w-full border-b border-gray-400 pb-2">
                        <button className="mr-3">Question</button>
                        <button className="ml-3 mr-3">Solution</button>
                        <button className="ml-3">Submissions</button>
                    </div>
                    <div className="flex-col mb-4 w-full">
                        <h2 className="flex justify-start text-lg ml-4 font-bold mb-4">{problem.title}</h2>
                        <p className="flex justify-start ml-4 mb-8">{problem.difficulty}</p>
                        <div className="ml-4">{problem.description}</div>
                    </div>
                </div>
                <div className="w-1/2 flex-col bg-white justify-end shadow-lg p-4 rounded-lg border border-gray-300">
                    <h2 className="text-2xl font-bold mb-4">Code Editor</h2>
                    <div className="bg-gray-900 text-white p-2 rounded-lg">
                        <textarea className="w-full h-full"></textarea>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProblemPage;