import React, { useState } from 'react';
import TextInput from './components/textbox';
import Output from './components/output';
import "./App.css";
import Navbar from './components/header';
import Footer from './components/footer';

function App() {
  const [processedTextArray, setProcessedTextArray] = useState([]);

  const handleTextSubmit = (textArray) => {
    setProcessedTextArray(textArray);
  };

  return (
    <div className="App bg-white text-black dark:bg-slate-900 dark:text-white text-lg">
      <header className="App-header">
      </header>
      <Navbar/>
      <main className=' justify-center gap-11 align-middle col-auto md:flex'>
        <TextInput onSubmit={handleTextSubmit} />
        <Output textArray={processedTextArray} />
        </main>
        <Footer />
    </div>
  );
}

export default App;
