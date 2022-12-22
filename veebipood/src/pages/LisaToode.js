import React, { useRef, useState } from 'react'

const LisaToode = () => {
  const [sonum, muudasonum] = useState('lisa uus toode');
  const nimiViide = useRef()
  const piltViide = useRef()
  const hindViide = useRef()
  const aktiivneViide = useRef()

  function lisa() {
    if (nimiViide.current.value === "") {
      muudasonum('Tühja toodet ei saa lisada')
    } else {
      muudasonum('toode lisatud ' + nimiViide.current.value);

      let tootedLS = localStorage.getItem("tooted") || "[]";
      tootedLS = JSON.parse(tootedLS);
      const uusToode = {
        "nimi": nimiViide.current.value,
        "hind": Number(hindViide.current.value),
        "pilt": piltViide.current.value,
        "aktiivne": aktiivneViide.current.checked,
      }
      tootedLS.push(uusToode)
      tootedLS = JSON.stringify(tootedLS);
      localStorage.setItem("tooted", tootedLS)
      
      nimiViide.current.value = ""
      hindViide.current.value = ""
      piltViide.current.value = ""
      aktiivneViide.current.value = false
    }
  }

  return (
    <div>
      <label>Uue toote nimi</label><br />
      <input ref={nimiViide} type="text" /><br />
      <label>Uue toote pilt</label><br />
      <input ref={piltViide} type="text" /><br />
      <label>Uue toote hind</label><br />
      <input ref={hindViide} type="number" /><br />
      <label>Uue toote aktiivine</label><br />
      <input ref={aktiivneViide} type="checkbox" /><br />
      <button onClick={lisa}>Sisesta</button>
      <br />
      <div>{sonum}</div>
    </div>
  )
}

export default LisaToode