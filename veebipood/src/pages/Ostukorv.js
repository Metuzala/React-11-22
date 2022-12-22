import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Ostukorv = () => {
  const [ostukorv, setOstukorv] = useState( JSON.parse(localStorage.getItem("ostukorv")) || [])

  const kustuta = (i) => {
    ostukorv.splice(i, 1)
    setOstukorv(ostukorv.slice())
    localStorage.setItem("ostukorv" , JSON.stringify(ostukorv))
  }

  const tyhjenda = () => {
    setOstukorv([])
    localStorage.setItem("ostukorv", JSON.stringify([]))
  }

  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode)
    setOstukorv(ostukorv.slice())
    localStorage.setItem("ostukorv" , JSON.stringify(ostukorv))
  }

  const arvutaKogusumma = () => {
    let kogusumma = 0;
    ostukorv.forEach(element => kogusumma = kogusumma + element.hind)
    return kogusumma
  }

  return (
    <div>
      {ostukorv.length === 0 && 
      <div>
       <div>Ostukorv on tühi</div>
       <Link to="/">mine tooteid lisama</Link>
       </div>}
       {ostukorv.length === 1 && <div>Ostukorvis on 1 ese</div>}
       {ostukorv.length >= 2 && <div>Ostukorvis on {ostukorv.length} eset</div>}
       {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
       {ostukorv.map((element, i) => <div key={i}>
        <img src={element.pilt} alt="" />
        <div>{element.nimi}</div>
        <div>{element.hind} €</div>
        <button onClick={() => kustuta(i)}>x</button>
        <button onClick={() => lisa(element)}>+</button>
        </div>)}

        <div>{arvutaKogusumma()}</div>
    </div>
  )
}

export default Ostukorv;