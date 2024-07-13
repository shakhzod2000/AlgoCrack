"use client";

import React, { useState } from "react";

const steps1 = [
    { 
        id: 1, 
        title: "Arrays and Hashing", 
        problems: [
            { id: 1, title: "Contains Duplicate", difficulty: "Easy", status: "Completed" },
            { id: 2, title: "Valid Anagram", difficulty: "Easy", status: "Completed" },
            { id: 3, title: "Two Sum", difficulty: "Easy", status: "Completed" },
            { id: 4, title: "Group Anagrams", difficulty: "Medium", status: "Not Started" },
            { id: 5, title: "Top K Frequent Elements", difficulty: "Medium", status: "Not Started" },
        ]
    },
];
const steps2 = [
    { 
        id: 2, 
        title: "Two Pointers", 
        problems: [
            { id: 1, title: "Valid Palindrome", difficulty: "Easy", status: "Completed" },
            { id: 2, title: "Remove Duplicates from Sorted Array", difficulty: "Easy", status: "Not Started" },
            { id: 3, title: "Remove Element", difficulty: "Easy", status: "Not Started" },
            { id: 4, title: "Move Zeroes", difficulty: "Easy", status: "Not Started" },
            { id: 5, title: "Reverse String", difficulty: "Easy", status: "Not Started" },
            { id: 6, title: "Reverse Vowels of a String", difficulty: "Easy", status: "Not Started" },
            { id: 7, title: "Two Sum II Input Array Is Sorted", difficulty: "Medium", status: "Not Started" },
            { id: 8, title: "3Sum", difficulty: "Medium", status: "Not Started" },
            { id: 9, title: "Container With Most Water", difficulty: "Medium", status: "Not Started" },
            { id: 10, title: "Trapping Rain Water", difficulty: "Hard", status: "Not Started" },
        ] 
    },
    { 
        id: 3, 
        title: "Stack",
        problems: [
            { id: 1, title: "Valid Parentheses", difficulty: "Easy", status: "Not Started" },
            { id: 2, title: "Min Stack", difficulty: "Medium", status: "Not Started" },
            { id: 3, title: "Evaluate Reverse Polish Notation", difficulty: "Medium", status: "Not Started" },
            { id: 4, title: "Generate Parentheses", difficulty: "Medium", status: "Not Started" },
            { id: 5, title: "Daily Temperatures", difficulty: "Medium", status: "Not Started" },
            { id: 6, title: "Car Fleet", difficulty: "Medium", status: "Not Started" },
            { id: 7, title: "Largest Rectangle In Histogram", difficulty: "Hard", status: "Not Started" },
        ]
    },
];
const steps3 = [
    { 
        id: 4, 
        title: "Sliding Window",
        problems: [
            { id: 1, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", status: "Not Started" },
            { id: 2, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Not Started" },
            { id: 3, title: "Longest Repeating Character Replacement", difficulty: "Medium", status: "Not Started" },
        ] 
    },
    { 
        id: 5, 
        title: "Linked List",
        problems: [
            { id: 1, title: "Reverse Linked List", difficulty: "Easy", status: "Not Started" },
            { id: 2, title: "Merge Two Sorted Lists", difficulty: "Easy", status: "Not Started" },
            { id: 6, title: "Linked List Cycle", difficulty: "Easy", status: "Not Started" },
            { id: 3, title: "Reorder List", difficulty: "Medium", status: "Not Started" },
            { id: 2, title: "Remove Nth Node From End of List", difficulty: "Medium", status: "Not Started" },
            { id: 8, title: "Copy List with Random Pointer", difficulty: "Medium", status: "Not Started" },
            { id: 4, title: "Add Two Numbers", difficulty: "Medium", status: "Not Started" },
            { id: 5, title: "Find The Duplicate Number", difficulty: "Medium", status: "Not Started" },
            { id: 9, title: "LRU Cache", difficulty: "Medium", status: "Not Started" },
            { id: 7, title: "Merge K Sorted Lists", difficulty: "Hard", status: "Not Started" },
            { id: 13, title: "Reverse Nodes in K-Group", difficulty: "Hard", status: "Not Started" },
        ] 
    },
    { 
        id: 6, 
        title: "Binary Search",
        problems: [
            { id: 1, title: "Binary Search", difficulty: "Easy", status: "Not Started" },
            { id: 2, title: "Search Insert Position", difficulty: "Easy", status: "Not Started" },
            { id: 3, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", status: "Not Started" },
        ] 
    },
];
const steps4 = [
    { 
        id: 7, 
        title: "Trees",
        problems: [
            { id: 1, title: "Invert Binary Tree", difficulty: "Easy", status: "Not Started" },
            { id: 2, title: "Maximum Depth of Binary Tree", difficulty: "Easy", status: "Not Started" },
            { id: 3, title: "Diameter of Binary Tree", difficulty: "Easy", status: "Not Started" },
            { id: 4, title: "Balanced Binary Tree", difficulty: "Easy", status: "Not Started" },
            { id: 5, title: "Same Tree", difficulty: "Easy", status: "Not Started" },
            { id: 6, title: "Subtree of Another Tree", difficulty: "Easy", status: "Not Started" },
        ] 
    },
];
const steps5 = [
    { 
        id: 8, 
        title: "Tries",
        problems: [
            { id: 1, title: "Implement Trie Prefix Tree", difficulty: "Medium", status: "Not Started" },
            { id: 2, title: "Design Add and Search Words - Data Structure", difficulty: "Medium", status: "Not Started" },
            { id: 3, title: "Word Search II", difficulty: "Hard", status: "Not Started" },
        ] 
    },
    { 
        id: 9, 
        title: "Heap / Priority Queue",
        problems: [
            { id: 1, title: "Kth Largest Element in a Stream", difficulty: "Easy", status: "Not Started" },
            { id: 2, title: "Last Stone Weight", difficulty: "Easy", status: "Not Started" },
        ] 
    },
    { 
        id: 10, 
        title: "Backtracking",
        problems: [
            { id: 1, title: "Subsets", difficulty: "Medium", status: "Not Started" },
            { id: 2, title: "Combination Sum", difficulty: "Medium", status: "Not Started" },
            { id: 3, title: "Permutations", difficulty: "Medium", status: "Not Started" },
        ] 
    },
];

const Roadmap = () => {
    const [selectedProblems, setSelectedProblems] = useState([]);
  
    const handleButtonClick = (problems) => {
      setSelectedProblems(problems);
    };
  
    return (
      <section className="container mx-auto my-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Roadmap</h2>
        <div className="relative flex flex-col items-center">
          {[steps1, steps2, steps3, steps4, steps5].map((steps, stepIndex) => (
            <div key={stepIndex} className="flex justify-center space-x-12 mt-24">
              {steps.map((step) => (
                <button
                  key={step.id}
                  className="relative p-3 bg-blue-500 text-white rounded-lg shadow-md"
                  style={{ height: "60px" }}
                  onClick={() => handleButtonClick(step.problems)}
                >
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                </button>
              ))}
            </div>
          ))}
        </div>
        {selectedProblems.length > 0 && (
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Problems:</h3>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">ID</th>
                  <th className="py-2">Title</th>
                  <th className="py-2">Difficulty</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {selectedProblems.map((problem) => (
                  <tr key={problem.id}>
                    <td className="py-2">{problem.id}</td>
                    <td className="py-2">{problem.title}</td>
                    <td className="py-2">{problem.difficulty}</td>
                    <td className="py-2">{problem.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    );
};

export default Roadmap;