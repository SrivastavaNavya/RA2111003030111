import React, { useState, useEffect } from 'react';
import NumberList from './NumberList';

function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9876/numbers/e'); // Replace with your actual API endpoint
      const data = await response.json();
      setNumbers(data.numbers); // Assuming the numbers are in "data.numbers"
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Numbers</h1>
      {numbers.length > 0 ? (
        <NumberList numbers={numbers} /> // Pass the numbers to the NumberList component
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;