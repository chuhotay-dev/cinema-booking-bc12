import React, { useState } from 'react';
import Counter from './Counter';

export default function DemoHook() {
  const [showCounter, setShowCounter] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);

  console.log('DemoHook > render');

  return (
    <>
      <h1>DemoHook</h1>
      <p>Random number: {randomNumber}</p>
      <button
        className="btn btn-success"
        onClick={() => setRandomNumber(Math.random())}
      >
        Random Number
      </button>
      <button className="btn btn-danger" onClick={() => setShowCounter(false)}>
        Remove Counter
      </button>
      {showCounter && <Counter />}
    </>
  );
}
