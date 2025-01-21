import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [advice, setAdvice] = useState<string>('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const genNewAdvice = () => {
    fetchAdvice();
  };

  const fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className='App'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button
            onClick={() => {
              genNewAdvice();
            }}
            className='button'
          >
            <span>Give ME ADVICE!</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
