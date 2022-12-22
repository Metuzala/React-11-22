import React from 'react'
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const MuudaToode = () => {
  const { i } = useParams()
  const tooted = JSON.parse(localStorage.getItem("tooted")) || []
  const leitudToode = tooted[i]
  const nimiRef = useRef()
  const piltRef = useRef()
  const hindRef = useRef()
  const aktiivneRef = useRef()
  const navigate = useNavigate()

  const uuendaToode = () => {
    const uuenenudToode = {
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),
      "pilt": piltRef.current.value,
      "aktiivne": aktiivneRef.current.value,
    }
    tooted[i] = uuenenudToode
    localStorage.setItem("tooted", JSON.stringify(tooted))
    navigate("/halda-toode")

  }


  return (
    <div>
      {leitudToode !== undefined &&
        <div>
          <label>Toote nimi</label><br />
          <input type="text" ref={nimiRef} defaultValue={leitudToode.nimi} /><br />
          <label>Toote hind</label><br />
          <input type="number" ref={hindRef} defaultValue={leitudToode.hind} /><br />
          <label>Toote pilt</label><br />
          <input type="text" ref={piltRef} defaultValue={leitudToode.pilt} /><br />
          <label>Toote aktiivne</label><br />
          <input type="checkbox" ref={aktiivneRef} defaultChecked={leitudToode.aktiivne} /><br />
          <button onClick={uuendaToode}>Muuda</button>
        </div>}
      {leitudToode === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default MuudaToode