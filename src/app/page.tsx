"use client";

import React from "react";
import TopBar from "./components/TopBar"
import Plot from "./components/Plot";

const Home: React.FC = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopBar />
      <h2>Algorithm Name</h2>
      <Plot data={data} />
    </main>
  )
};

export default Home;
