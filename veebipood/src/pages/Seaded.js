import { useState } from "react";

const Seaded = () => {
    const [keel, setKeel] = useState(localStorage.getItem('keel') || 'ee' );

//    const uuendaKeelEE = () => {
//        setKeel('ee')
  //      localStorage.setItem('keel', 'ee');
   // }
 //   const uuendaKeelEN = () => {
  //      setKeel('en')
  //      localStorage.setItem('keel', 'en');
 //   }
    const uuendaKeel = (uusKeel) => {
        setKeel(uusKeel)
        localStorage.setItem('keel', uusKeel);
    }

  return (
    <div>
        <button onClick={ () => uuendaKeel("ee")}>EE</button>
        <button onClick={ () => uuendaKeel("en")}>EN</button>
        <button onClick={ () => uuendaKeel("ru")}>RU</button>
        {keel === 'ee' && <div>veebilehe keel on eesti</div>}
        {keel === 'en' && <div>veebilehe keel on inglise</div>}
        {keel === 'ru' && <div>veebilehe keel on vene</div>}
    </div>
  )
}

export default Seaded