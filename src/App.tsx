import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <p>
          Algorithm Visualizer
        </p>
      </header>
      <aside className="sidebar">
        List of available algorithms goes here
        <div className="sorting">
          <p>Sorting</p>
          <ul>
            <li>Bubble Sort</li>
            <li>Insertion Sort</li>
            <li>Quick Sort</li>
          </ul>
        </div>
        <div className="searching">
          <p>Searching</p>
          <ul>
            <li>Linear Search</li>
            <li>Binary Search</li>
          </ul>
        </div>
      </aside>
      <main className="display">
        This is the main display for the algorithm
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
