"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import ProblemPage from "./ProblemPage";
import problemsData from "./problemsData";

const steps1 = [
    { 
        id: 1, 
        title: "Arrays and Hashing", 
        problems: [
            { id: 1, status: false, star: false, title: "Contains Duplicate", difficulty: "Easy", video_solution: "🎞️", code: "Python", 
                description:( 
                    <div>
                        <p className="mb-6">
                            Given an integer array nums, return true if any value appears <span className="font-bold">more than once</span> in the array, otherwise return false.
                        </p>
                        <p className="flex justify-start font-bold mb-6">Example 1:</p>
                        <p className="flex justify-start mb-4">input: [1, 2, 3, 1]</p>
                        <p className="flex justify-start mb-8">output: true</p>
                        <p className="flex justify-start font-bold mb-6">Example 2:</p>
                        <p className="flex justify-start mb-4">input: [1, 2, 3, 4]</p>
                        <p className="flex justify-start mb-4">output: false</p>
                    </div>
                )
            },
            { id: 2, status: false, star: false, title: "Valid Anagram", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 3, status: false, star: false, title: "Two Sum", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 4, status: false, star: false, title: "Group Anagrams", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 5, status: false, star: false, title: "Top K Frequent Elements", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
        ]
    },
];

const steps2 = [
    { 
        id: 2, 
        title: "Two Pointers", 
        problems: [
            { id: 1, status: false, star: false, title: "Valid Palindrome", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 2, status: false, star: false, title: "Remove Duplicates from Sorted Array", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 3, status: false, star: false, title: "Remove Element", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 4, status: false, star: false, title: "Move Zeroes", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 5, status: false, star: false, title: "Reverse String", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 6, status: false, star: false, title: "Reverse Vowels of a String", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 7, status: false, star: false, title: "Two Sum II Input Array Is Sorted", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 8, status: false, star: false, title: "3Sum", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 9, status: false, star: false, title: "Container With Most Water", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 10, status: false, star: false, title: "Trapping Rain Water", difficulty: "Hard", video_solution: "🎞️", code: "Python" },
        ] 
    },
    { 
        id: 3, 
        title: "Stack",
        problems: [
            { id: 1, status: false, star: false, title: "Valid Parentheses", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 2, status: false, star: false, title: "Min Stack", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 3, status: false, star: false, title: "Evaluate Reverse Polish Notation", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 4, status: false, star: false, title: "Generate Parentheses", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 5, status: false, star: false, title: "Daily Temperatures", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 6, status: false, star: false, title: "Car Fleet", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 7, status: false, star: false, title: "Largest Rectangle In Histogram", difficulty: "Hard", video_solution: "🎞️", code: "Python" },
        ]
    },
];
const steps3 = [
    { 
        id: 4, 
        title: "Sliding Window",
        problems: [
            { id: 1, status: false, star: false, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 2, status: false, star: false, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 3, status: false, star: false, title: "Longest Repeating Character Replacement", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
        ] 
    },
    { 
        id: 5, 
        title: "Linked List",
        problems: [
            { id: 1, status: false, star: false, title: "Reverse Linked List", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 2, status: false, star: false, title: "Merge Two Sorted Lists", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 3, status: false, star: false, title: "Linked List Cycle", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 4, status: false, star: false, title: "Reorder List", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 5, status: false, star: false, title: "Remove Nth Node From End of List", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 6, status: false, star: false, title: "Copy List with Random Pointer", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 7, status: false, star: false, title: "Add Two Numbers", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 8, status: false, star: false, title: "Find The Duplicate Number", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 9, status: false, star: false, title: "LRU Cache", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 10, status: false, star: false, title: "Merge K Sorted Lists", difficulty: "Hard", video_solution: "🎞️", code: "Python" },
            { id: 11, status: false, star: false, title: "Reverse Nodes in K-Group", difficulty: "Hard", video_solution: "🎞️", code: "Python" },
        ] 
    },
    { 
        id: 6, 
        title: "Binary Search",
        problems: [
            { id: 1, status: false, star: false, title: "Binary Search", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 2, status: false, star: false, title: "Search Insert Position", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 3, status: false, star: false, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
        ] 
    },
];
const steps4 = [
    { 
        id: 7, 
        title: "Trees",
        problems: [
            { id: 1, status: false, star: false, title: "Invert Binary Tree", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 2, status: false, star: false, title: "Maximum Depth of Binary Tree", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 3, status: false, star: false, title: "Diameter of Binary Tree", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 4, status: false, star: false, title: "Balanced Binary Tree", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 5, status: false, star: false, title: "Same Tree", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 6, status: false, star: false, title: "Subtree of Another Tree", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
        ] 
    },
];
const steps5 = [
    { 
        id: 8, 
        title: "Tries",
        problems: [
            { id: 1, status: false, star: false, title: "Implement Trie Prefix Tree", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 2, status: false, star: false, title: "Design Add and Search Words - Data Structure", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 3, status: false, star: false, title: "Word Search II", difficulty: "Hard", video_solution: "🎞️", code: "Python" },
        ] 
    },
    { 
        id: 9, 
        title: "Heap / Priority Queue",
        problems: [
            { id: 1, status: false, star: false, title: "Kth Largest Element in a Stream", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
            { id: 2, status: false, star: false, title: "Last Stone Weight", difficulty: "Easy", video_solution: "🎞️", code: "Python" },
        ] 
    },
    { 
        id: 10, 
        title: "Backtracking",
        problems: [
            { id: 1, status: false, star: false, title: "Subsets", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 2, status: false, star: false, title: "Combination Sum", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
            { id: 3, status: false, star: false, title: "Permutations", difficulty: "Medium", video_solution: "🎞️", code: "Python" },
        ] 
    },
];


const difficultyColor = (steps) => {
    steps.map((step) => {
        step.problems.map((problem) => {
            if (problem.difficulty === "Easy")
                problem.difficulty = <span className="text-green-600 font-bold">{problem.difficulty}</span>;
            else if (problem.difficulty === "Medium")
                problem.difficulty = <span className="text-yellow-400 font-bold">{problem.difficulty}</span>;
            else
                problem.difficulty = <span className="text-red-500 font-bold">{problem.difficulty}</span>;
        });
    });
    return steps;
}

const Roadmap = () => {
    const [selectedProblems, setSelectedProblems] = useState([]); // This state will store the problems that are selected by the user.
    const [isModalOpen, setIsModalOpen] = useState(false); // This state will determine whether the modal is open or not.
    const [isProblemOpen, setIsProblemOpen] = useState(false); // This state will store the problems data.
    const [currentProblem, setCurrentProblem] = useState(null); // This state will store the current problem that is being viewed by the user.

    const handleStepClick = (problems) => { // This function will set the selected problems and open the modal.
        setSelectedProblems(problems);
        setIsModalOpen(true);
        difficultyColor(steps1);
        difficultyColor(steps2);
        difficultyColor(steps3);
        difficultyColor(steps4);
        difficultyColor(steps5);
    };
    
    const handleProblemClick = (problem) => {
        setIsModalOpen(false);
        // const step = problemsData.find(pd => pd.problems.some(p => p.id === problem.id && p.title === problem.title));
        // if (step) {
        //     const fullProblem = step.problems.find(p => p.id === problem.id);
        //     setCurrentProblem(fullProblem);
        // } else
        //     console.error(`Problem not found: ${problem.title}`);
        setCurrentProblem(problem);
        setIsProblemOpen(true);
    };

    const handleStatusChange = (id) => { // This function will toggle the status of the selected problem.
        setSelectedProblems(prevProblems =>
            prevProblems.map(problem =>
                problem.id === id ? { ...problem, status: !problem.status } : problem
            )
        );
    };

    const handleStarChange = (id) => {
        setSelectedProblems(prevProblems =>
            prevProblems.map(problem => 
                problem.id === id ? { ...problem, star: !problem.star } : problem
            )
        );
    };
  
    return (
        <section className="container mx-auto my-6">
            <h2 className="text-4xl font-bold text-center">Roadmap</h2>
            <div className="relative flex flex-col items-center">
                {[steps1, steps2, steps3, steps4, steps5].map((steps, stepIndex) => (
                    <div key={stepIndex} className="flex justify-center space-x-12 mt-20">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                className="relative p-3 bg-blue-500 text-white rounded-lg shadow-md"
                                style={{ height: "70px" }}
                                onClick={() => handleStepClick(step.problems)}
                            >
                                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                            </button>
                        ))}
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <table className="min-w-full bg-white mt-10">
                    <thead>
                        <tr>
                            <th className="py-2">Status</th>
                            <th className="py-2">Star</th>
                            <th className="py-2">Problem</th>
                            <th className="py-2">Difficulty</th>
                            <th className="py-2">Video Solution</th>
                            <th className="py-2">Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedProblems.map((problem) => (
                            <tr key={problem.id}>
                                <td className="py-2">
                                    <button
                                        onClick={() => handleStatusChange(problem.id)}
                                        style={{ fontSize: "22px", color: "yellow" }}
                                    >
                                        {problem.status ? '✅' : '⬜'}
                                    </button>
                                </td>
                                <td className="py-2">
                                    <button
                                        onClick={() => handleStarChange(problem.id)}
                                        style={{ fontSize: "32px", color: "gold" }}
                                    >
                                        {problem.star ? '★' : '☆'}
                                    </button>
                                </td>
                                <td className="py-2">
                                    <button
                                        className="py-2 px-4 font-semibold hover:underline hover:text-blue-500"
                                        onClick={() => handleProblemClick(problem)}
                                    >
                                        {problem.title}
                                    </button>
                                </td>
                                <td className="py-2">{problem.difficulty}</td>
                                <td className="py-2">{problem.video_solution}</td>
                                <td className="py-2">{problem.code}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Modal>
            {isProblemOpen && currentProblem && (
                <ProblemPage
                    isOpen={isProblemOpen}
                    onClose={() => setIsProblemOpen(false)}
                    problem={currentProblem}
                />
            )}
        </section>
    );
};


export default Roadmap;