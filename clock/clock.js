import React, { useState, useEffect } from 'react';

const getTime = () => new Date().toLocaleTimeString();

export default React.memo((props) => {
  const [time, setTime] = useState(getTime());
  console.log('Clock component');

  useEffect(() => {
    console.log('Clock node component will mount');
    const interval = setInterval(() => { setTime(getTime()); }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Clock node component will unmount')
    }
  }, []);

  return (
      <span>{time}</span>
  );
})
