import React, { useState, useEffect } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simpan reference timer ID
    const timer = setTimeout(() => {
      console.log('nungguin yaa');
    }, 5000);

    // Cleanup function yang benar
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default SimpleCounter;