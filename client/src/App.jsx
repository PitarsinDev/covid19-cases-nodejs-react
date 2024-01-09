import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [covidCases, setCovidCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/covid-cases');
        setCovidCases(response.data);
      } catch (error) {
        console.error('Error fetching COVID cases:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-center text-3xl p-10'>COVID-19 Cases</h1>

      <div className='flex justify-center'>
      <div className='w-11/12 border border-black rounded-2xl pt-10 overflow-y-auto'>
      <div className='grid grid-cols-4 gap-10 px-10'>
      {covidCases.map((caseData) => (
      <ul className='border border-black rounded-xl py-5'>
        <div className='flex justify-center'>
          <li>Province : </li>
          <li className='thai'>{caseData.province}</li>
        </div>
        <div className='flex justify-center'>
          <li>Year : </li>
          <li>{caseData.year}</li>
        </div>
        <div className='flex justify-center'>
          <li>Age : </li>
          <li>{caseData.age_number}</li>
        </div>
        <div className='flex justify-center'>
          <li>Sex : </li>
          <li>{caseData.gender}</li>
        </div>
      </ul>
      ))}
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
