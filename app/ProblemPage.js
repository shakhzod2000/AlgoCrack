// ProblemPage.js
import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { useParams } from "react-router-dom";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ambiance-mobile.css";
import "codemirror/mode/clike/clike";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";

const ProblemPage = ({ isOpen, onClose, problem }) => {
    const { problemId } = useParams();
    if (!isOpen) return null;

    const initialCode = localStorage.getItem(`code-${problemId}`) || "//Write your code here";
    const initialLanguage = localStorage.getItem(`language-${problemId}`) || "python";

    const [code, setCode] = useState(initialCode);
    const [language, setLanguage] = useState(initialLanguage);
    const [consoleOutput, setConsoleOutput] = useState("");

    useEffect(() => {
        localStorage.setItem(`code-${problemId}`, code);
    }, [code, problemId]);

    useEffect(() => {
        localStorage.setItem(`language-${problemId}`, language);
    }, [language, problemId]);
    
    const languageModes = {
        python: "python",
        javascript: "javascript",
        java: "text/x-java",
        c: "text/x-csrc",
        cpp: "text/x-c++src",
        csharp: "text/x-csharp",
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const runCode = () => {
        // Placeholder for code execution logic
        setConsoleOutput(`Executing ${language} code...\n${code}`);
    };

    const submitCode = () => {
        // Placeholder for code submission logic
        setConsoleOutput(`Submitting ${language} code...\n${code}`);
    };

    return (
        <main className="fixed inset-0 bg-gray-200 w-full h-full">
            <header className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md mb-1 w-full border border-gray-300">
                <h1 className="flex justify-center text-xl font-bold mb-2">⋮☰ algocrack 150</h1>
                <button className="absolute top-0 right-0 m-4 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full"
                    onClick={onClose}
                >
                    Close
                </button>
            </header>
            <section className="bg-gray-200 p-1 rounded shadow-lg w-full h-full flex">
                <problem className="w-1/2 flex flex-col mr-2 bg-white justify-start shadow-lg p-4 rounded-lg border border-gray-300">
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
                </problem>
                <editor className="w-1/2 flex-col bg-white justify-end shadow-lg p-4 rounded-lg border border-gray-300">
                    <div className="flex justify-between items-center mb-4">
                        <select
                            className="p-2 font-bold rounded bg-gray-100"
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            {Object.keys(languageModes).map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                </option>
                            ))}
                        </select>
                        <div className="flex space-x-2">
                            <button className="p-2 bg-blue-600 text-white rounded" onClick={runCode}>
                                Run
                            </button>
                            <button className="p-2 bg-green-600 text-white rounded" onClick={submitCode}>
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="bg-white text-white p-2 rounded-lg">
                        <CodeMirror
                            value={code}
                            options={{
                                mode: languageModes[language],
                                tabSize: 4,
                                indentUnit: 4,
                                indentWithTabs: true,
                                smartIndent: true,
                                lineWrapping: true,
                                lineNumbers: true,
                                foldGutter: true,
                                matchBrackets: true,
                                autoCloseBrackets: true,
                                theme: "ambiance-mobile",
                            }}
                            onBeforeChange={(editor, data, value) => {
                                setCode(value);
                            }}
                        />
                    </div>
                    <div className="mt-4 p-2 bg-gray-200 rounded-lg">
                        <h3 className="font-bold mb-2">Console</h3>
                        <pre className="bg-black text-white p-2 rounded">{consoleOutput}</pre>
                    </div>
                </editor>
            </section>
        </main>
    );
};

export default ProblemPage;
