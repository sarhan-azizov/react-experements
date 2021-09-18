import React, { useCallback, useEffect, useState } from 'react'

import Clock from './clock'

export default function Page() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount +1 );
  }, []);

  useEffect(() => {
    console.log('Parent node component did update')
  }, [count]);

  useEffect(() => {
    return () => {
      console.log('Parent node component will unmount')
    }
  }, []);

  console.log(count % 2 === 0);

  return (
      <div>
        <button style={{ margin: '100px 10px 100px 100px' }} onClick={handleClick}>{count}</button>
        { count % 2 === 0 ? <Clock /> : null }
      </div>
  );
}
