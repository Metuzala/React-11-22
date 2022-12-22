import { useState } from "react";
import { Link } from "react-router-dom";


const Tooted = () => {
  const [tooted, setTooted] = useState( JSON.parse(localStorage.getItem("tooted")) || [])

  const lisaOstukorvi = (klikitudToode) => {
    console.log(klikitudToode)

    let ostukorvLs = localStorage.getItem("ostukorv")
    ostukorvLs = JSON.parse(ostukorvLs) || []
    ostukorvLs.push(klikitudToode)
    ostukorvLs = JSON.stringify(ostukorvLs)
    localStorage.setItem("ostukorv", ostukorvLs)
  }

  const filtreeri = (klikitudT2ht) => {
    const tulem = tooted.filter(element => element.nimi.startsWith(klikitudT2ht));
    setTooted(tulem)
  }

  const esiT2hed = [...new Set(tooted.map(element => element.nimi.charAt(0)))]


  return (
    <div>
    { /* <button onClick={() => filtreeri("H")}>H</button>
      <button onClick={() => filtreeri("V")}>V</button>
      <button onClick={() => filtreeri("B")}>B</button>*/}
      { esiT2hed.map(element =>
        <button key={element} onClick={() => filtreeri(element)}>{element}</button>
      )}
      {tooted.filter(element => element.aktiivne === true).map((element, i) =>
      <div key={i}>
        <Link to={"/toode/" + i}>
          <div>{element.nimi}</div>
          <img src={element.pilt} alt="" />
          <div>{element.hind}</div>
        </Link>
        <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
      </div>)}
    </div>
  )
}

export default Tooted