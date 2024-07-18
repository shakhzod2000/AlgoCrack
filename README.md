# AlgoCrack

AlgoCrack is a comprehensive roadmap and problem-solving platform for aspiring programmers and software engineers. It provides a structured learning path with categorized problems to help users enhance their coding skills.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Database Information](#database-information)
- [Contributing](#contributing)

## Features
- **Roadmap**: Visualize your learning journey through different stages of problem-solving.
- **Problems**: Practice coding problems categorized by topics such as Arrays and Hashing, Two Pointers, and more.
- **Difficulty Levels**: Problems are categorized into Easy, Medium, and Hard difficulties.
- **Modal and Problem Pages**: Interactive problem selection and detailed problem pages with descriptions, examples, and solutions.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- React

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/AlgoCrack.git
   cd AlgoCrack
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start
## Project Structure
   AlgoCrack/
   │
   ├── README.md               # Project description and instructions
   ├── package.json            # Project metadata and dependencies
   ├── next.config.js          # Next.js configuration file
   │
   ├── app/                    # Main application code
   │   ├── App.js              # App.js file 
   │   ├── Roadmap.js          # Roadmap component
   │   ├── ProblemPage.js      # Problem Page component
   │   ├── Modal.js            # Modal component
   │   ├── problemsData.js     # Data for problems
   │   └── page.tsx            # Main page
   │
   ├── backend/                # Backend logic (if any)
   │   ├── server.js           # Express server setup
   │   └── api/                # API endpoints
   │       ├── index.js        # API index
   │       └── problems.js     # Problems API
   │
   ├── data/                   # Data files
   │   └── problems.json       # JSON data for problems
   │
   ├── frontend/               # Frontend code (Next.js components)
   │   ├── components/         # React components
   │   │   ├── Header.js       # Header component
   │   │   └── Footer.js       # Footer component
   │   ├── pages/              # Next.js pages
   │   │   ├── index.js        # Main page
   │   │   └── roadmap.js      # Roadmap page
   │   └── styles/             # CSS styles
   │       └── globals.css     # Global styles
   │
   ├── modules/                # Custom modules
   │   └── ProblemModule.js    # Module for problem handling
   │
   └── public/                 # Public assets
       └── images/             # Image files
           └── logo.png        # Project logo

## Components
   Modal.js: Component to display problems in a modal view.
   ProblemPage.js: Component for displaying detailed problem descriptions and solutions.
   Roadmap.js: Main component to visualize and navigate the roadmap of problem-solving stages.
7. Data
   Roadmap.js: Contains all problem data categorized by topics and difficulty levels.
## Database Information
   Currently, this project does not utilize a database for persistent storage. Future plans include integrating a database to store user progress, problem solutions, and more.
## Contributing
   Contributions are welcome! Please follow these steps to contribute:

   1. Fork the repository.
   2. Create a new branch ```bash git checkout -b feature/your-feature-name```
   3. Make your changes.
   4. Commit your changes ```bash git commit -m 'Add some feature'```
   5. Push to the branch ```bash git push origin feature/your-feature-name```
   6. Open a Pull Request.
