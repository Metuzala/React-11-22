import React, { useRef, useState } from 'react'
import poedFailist from "../poed.json"

const Poed = () => {
  const [meiePoed, uuendaPoode] = useState(poedFailist.slice())

  const tagasi = () => {
    uuendaPoode(poedFailist.slice())
  }

  const sorteriAZ = () => {
    meiePoed.sort();
    uuendaPoode(meiePoed.slice());
  }
  const sorteritahed = () => {
    meiePoed.sort((a, b) => a.length - b.length);
    uuendaPoode(meiePoed.slice());
  }

  const filtreeri = () => {
    const tulem = meiePoed.filter(pood => pood.endsWith("mäe"));
    uuendaPoode(tulem)
  }

  const filtreeriLinn = () => {
    const tulem = meiePoed.filter(pood => pood.includes("linn"));
    uuendaPoode(tulem)
  }
  const filtreeri3sS = () => {
    const tulem = meiePoed.filter(pood => pood.charAt(2) === "s");
    uuendaPoode(tulem)
  }
  const muudaVaikseks = () => {
    const tulem = meiePoed.map(pood => pood.toLocaleLowerCase());
    uuendaPoode(tulem);
  }
  const muudaKriipsudEtte = () => {
    const tulem = meiePoed.map(pood => '--' + pood);
    uuendaPoode(tulem);
  }

  const tuhjenda = () => {
    const tulem = meiePoed.filter(pood => false);
    uuendaPoode(tulem)
  }

  const kustuta = (j2riekorraNr) => {
    meiePoed.splice(j2riekorraNr, 1);
    uuendaPoode(meiePoed.slice());
  }

  const poodRef = useRef();

  const lisa = () => {
    meiePoed.push(poodRef.current.value);
    uuendaPoode(meiePoed.slice())
  }

  return (
    <div>
      <button onClick={tagasi}>Tagasi</button>
      <button onClick={sorteriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteritahed}>Sorteeri tähed</button>
      <button onClick={filtreeri}>Jäta alles mäe-ga lõppevad</button>
      <button onClick={filtreeriLinn}>Jäta alles 'linn' sisaldav </button>
      <button onClick={filtreeri3sS}>Jäta alles 3s täht s</button>
      <button onClick={muudaVaikseks}>muuda tähed väikseks</button>
      <button onClick={muudaKriipsudEtte}>muuda kõikidel kriipsud ette</button>
      <button onClick={tuhjenda}>Tühjenda</button>
      <div>poode kokku : {meiePoed.length}</div>
      {meiePoed.map((pood, index) => <div key={index}>{index}. {pood} <button onClick={() => kustuta(index)}>x</button></div>)}

      <br />
      <label>Lisa pood</label>
      <input id='poodinput' type="text" ref={poodRef} />
      <button onClick={lisa}>Lisa uus</button>
      <div>--------------</div>
      <div>Mustamäe</div>
      <div>Kristiine</div>
      <div>Lasnamäe</div>
      <div>Põhja-Tallinn</div>
      <div>Õismäe</div>
      <div>Kakumäe</div>
      <div>--------------</div>
      {['BMW', 'Nobe', 'Tesla'].map(auto => <div>{auto}</div>)}
    </div>
  )
}

export default Poed