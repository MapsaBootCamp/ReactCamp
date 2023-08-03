import React, { useCallback, useMemo, useState } from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const [flag, setFlag] = useState('toggle');
  const [indx, setIndx] = useState(1);
  console.log('PARENT COMPONENT');

  function fib(indx) {
    console.log('Fibo');
    if (indx <= 2) {
      return 1;
    } else {
      return fib(indx - 2) + fib(indx - 1);
    }
  }

  const fibo = useMemo(() => fib(indx), [indx]);
  
  const testUseCallback = useCallback(
    function testUseCallback() {
      console.log('TEST USE CALLBACK');
    },
    [indx]
  );
  return (
    <>
      <div>ParentComponent</div>
      <ChildComponent testUseCallback={testUseCallback} />
      <button
        onClick={() =>
          setFlag((flag) => (flag === 'toggle' ? 'unToggle' : 'toggle'))
        }
      >
        {flag}
      </button>
      <div>
        <h1>FIBO</h1>
        <p>
          fibo {indx}: {fibo}
        </p>
        <input
          type="text"
          value={indx}
          onChange={(e) => setIndx(Number(e.target.value))}
        />
      </div>
    </>
  );
}
