import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col w-full relative">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;