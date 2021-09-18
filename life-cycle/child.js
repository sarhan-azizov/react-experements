import React, { useEffect } from 'react'

export default React.memo((props) => {
  console.log('Child')

  useEffect(() => {
    console.log('Child node component will mount')
  }, []);

  useEffect(() => {
    console.log('Child node component did update')
  }, [props.users]);

  useEffect(() => {
    return () => {
      console.log('Child node component will unmount')
    }
  }, []);


  return (
    <button style={{ margin: '100px 100px  100px 10px ' }} onClick={props.onIncrement}>Increment {props.users}</button>
  );
})
