import React from 'react'
import { useState } from 'react';

const Avaleht = () => {

  const [kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState('');
  

  function suurenda (){
    setKogus(kogus +1)
    setSonum('+ 1')
  };
  function vahenda(){
    setKogus(kogus -1)
    setSonum('- 1')
  }
  function nulli(){
    setKogus(0)
    setSonum('nulli')
  }

  return (
    <div>
      <div>{sonum}</div>
     { kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <div>{kogus}</div>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht;