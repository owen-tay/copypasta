import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-slate-900   p-4 rounded-lg w-full text-center text-4xl mb-5 text-pink-500 font-bold">
      <h1> &#128514; Copypasta Generator &#128169;</h1>
      <div>
        <p className='text-black dark:text-white text-xl mt-4'>
            How To Use: Write or copy text into the first box and press sumbit. This will add emojis to certain words. Use with care.
        </p>
      </div>
    </div>
    
    
    
  );
};

export default Navbar;