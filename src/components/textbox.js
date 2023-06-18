import React, { useState } from 'react';

const TextInput = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    const textArray = text.split('\n');
    onSubmit(textArray);
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="Input" className="block text-lg font-semibold text-black dark:text-white mb-2">
        Enter Your Text:
      </label>
      <textarea
        id="Input"
        name="Input"
        className="h-96 w-72 md:w-96  resize-none border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-600 dark:text-white rounded-lg p-4 leading-normal"
        placeholder="Type your text here..."
        value={text}
        onChange={handleChange}
        required
      ></textarea>
      <button
        className="mt-3 w-52 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default TextInput;
