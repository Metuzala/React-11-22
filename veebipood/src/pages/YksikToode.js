import React from 'react'
import { useParams } from 'react-router-dom'

const YksikToode = () => {
  const {index} = useParams()
  // 1. võtan url järiekorra nr
  // 2. võtma kõik tooted
  // 3. otsima järiekorra alusel

  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[index]

  return (
    <div>
      {leitudToode !== undefined && 
      <div>
        <img src={leitudToode.pilt} alt="" />
        <div>{leitudToode.nimi}</div>
        <div>{leitudToode.hind}</div>
        <div>{leitudToode.aktiivine + 0}</div>
        </div>}
      {leitudToode === undefined && <div>Tootet ei leitud</div>}
    </div>
  )
}

export default YksikToode