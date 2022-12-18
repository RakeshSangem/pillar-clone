import React from "react";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <div className="h-screen w-full overflow-scroll">
      <main className="mx-auto max-w-3xl px-4 font-Montserrat text-white md:px-6">
        <Navbar />
        <HomePage />
      </main>
    </div>
  );
}
