import React, { useCallback, useEffect, useMemo, useState } from 'react'

import Child from './child'

export default function Page() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount +1 );
  }, []);

  const users = useMemo(() => count, [count])

  useEffect(() => {
    console.log('Parent node component will mount')
  }, []);

  useEffect(() => {
    console.log('Parent node component did update')
  }, [count]);

  useEffect(() => {
    return () => {
      console.log('Parent node component will unmount')
    }
  }, []);

  return (
    <div>
      <button style={{ margin: '100px 10px 100px 100px' }} onClick={handleClick}>{count}</button>
      <Child onIncrement={handleClick} users={users} />
    </div>
  );
}
