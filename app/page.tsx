"use client";

import Image from "next/image";
import Link from "next/link";
import Roadmap from "../app/Roadmap";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-8 bg-gray-100">
      <header className="w-full py-6 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">AlgoCrack</h1>
          <nav className="space-x-4">
            <Link legacyBehavior href="/">
              <a className="text-blue-500 hover:underline">Home</a>
            </Link>
            <Link legacyBehavior href="/about">
              <a className="text-blue-500 hover:underline">About</a>
            </Link>
            <Link legacyBehavior href="mailto:sshermatov50@gmail.com">
              <a className="text-blue-500 hover:underline">Contact</a>
            </Link>
          </nav>
        </div>
      </header>
      <section className="container mx-auto my-12 text-center">
        <div className="flex justify-between items-start">
          <div className="w-1/2 pr-4">
            <h2 className="text-4xl font-bold my-6 mb-6">Welcome to AlgoCrack</h2>
            <p className="text-xl mb-6">
              Learn algorithms and data structures for coding interviews.
            </p>
            <div className="flex justify-center space-x-4">
              <Link legacyBehavior href="/learn">
                <a className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Get Started</a>
              </Link>
              <Link legacyBehavior href="/resources">
                <a className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">Resources</a>
              </Link>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <Roadmap />
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-white shadow-md">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AlgoCrack. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
