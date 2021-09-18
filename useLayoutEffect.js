import React, { useState, useEffect, useLayoutEffect } from 'react';

const getTime = () => new Date().toLocaleTimeString();

export default React.memo((props) => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    console.log('== Clock async operation ');
    if (value === 0) {
      setValue(getTime());
    }
  }, [value]);

  console.log('== Clock render');

  return (
    <div onClick={() => setValue(0)}>
      current time: {value}
    </div>
  );
})
