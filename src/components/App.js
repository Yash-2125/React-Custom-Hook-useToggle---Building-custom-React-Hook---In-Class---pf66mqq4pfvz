import React from 'react';
import useToggle from './useToggle'; // Assuming this path is correct
import '../styles/App.css';

const App = () => {
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <button id='button' onClick={() => setIsTextChanged()}>
      {isTextChanged ? 'Toggled' : 'Click to Toggle'}
    </button>
  );
};

export default App;
