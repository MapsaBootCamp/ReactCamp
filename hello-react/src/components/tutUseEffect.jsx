import React, { useEffect, useState } from 'react';

export default function TutUseEffect({ count }) {
  const [localFlag, setLocalFlag] = useState(false);

  console.log('component tutUseEffect');

  useEffect(() => {
    console.log('count: Mount or update', count);
    return () => {
      console.log('count: cleanUp');
    };
  }, [count]);

  useEffect(() => {
    console.log('localFlag: Mount or update ', localFlag);
    return () => {
      console.log('localFlag: cleanUp');
    };
  }, [localFlag]);

  function handleClick() {
    setLocalFlag((localFlag) => !localFlag);
  }

  return (
    <>
      <div>TutUseEffect</div>
      <button onClick={handleClick}>clickLocal</button>
      <p>{count}</p>
    </>
  );
}
