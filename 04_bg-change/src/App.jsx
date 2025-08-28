import { useState } from 'react';

 
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-800 text-white p-4 shadow-lg z-10">
      <div className=" justify-center container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide ">Color App</h1>
         
      </div>
    </nav>
  );
};
 
const App = () => {
   
  const [color, setColor] = useState('#ffffff'); 
 
  const handleColorChange = (event) => {
      setColor(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <Navbar />
      
       
      <div 
        className="w-full max-w-lg h-64 rounded-xl shadow-2xl transition-all duration-300 transform scale-100 hover:scale-105 mt-20"
        style={{ backgroundColor: color }}
      >
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        
        <input
          type="text"
          placeholder="Enter a color (e.g., red, #3498db)"
          value={color}
          onChange={handleColorChange}
          className="w-full sm:w-80 px-4 py-2 text-lg rounded-xl shadow-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
        />
         
      </div>
    </div>
  );
};

export default App;
