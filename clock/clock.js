import React, { useState, useEffect } from 'react';

const getTime = () => new Date().toLocaleTimeString();

export default React.memo((props) => {
  const [time, setTime] = useState(getTime());
  console.log('Clock component');

  let interval = null;

  useEffect(() => {
    console.log('Clock node component will mount');
    interval = setInterval(() => { setTime(getTime()); }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Clock node component will unmount')
    }
  }, []);

  return (
      <span>{time}</span>
  );
})
