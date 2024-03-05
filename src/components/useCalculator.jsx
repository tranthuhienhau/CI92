import { useState } from 'react';

function useCalculator(initialValue) {
  const [result, setResult] = useState(initialValue);

  const add = (number) => {
    setResult(result + number);
  };

  const subtract = (number) => {
    setResult(result - number);
  };

  const multiply = (number) => {
    setResult(result * number);
  };

  const divide = (number) => {
    setResult(result / number);
  };

  return [result, { add, subtract, multiply, divide }];
}

export default useCalculator;
