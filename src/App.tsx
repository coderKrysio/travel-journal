import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="App h-screen bg-slate-900 ">
      <Navbar />
      <div className='flex flex-col justify-center items-center pt-5 mt-10  '>
        <Card />
        <hr className='border-gray-600 m-6 w-[52rem]' />
      </div>
    </div>
  );
}

export default App;
