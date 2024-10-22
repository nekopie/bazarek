import './App.css';
import Nazwa from "./gruszka.jsx";
import zdjgru from "./gruszka.jpg";
import zdjjab from "./jablko.jpg";
import zdjsal from "./salata.jpg";
import zdjziem from "./ziemniak.png";
const tablica = [
  {zdj:zdjgru, name:"gruszka", opis:"smaczna eko gruszka", cena:"3.50zl", stan:"na stanie: 20"},   {zdj:zdjsal, name:"sałata", opis:"smaczna eko sałata", cena:"8.80zl", stan:"na stanie: 10"},   {zdj:zdjziem, name:"ziemniak", opis:"smaczny eko ziemniak", cena:"6.60zl", stan:"na stanie: 50"},   {zdj:zdjjab, name:"jabłko", opis:"smaczne eko jabłko", cena:"7.89zl", stan:"na stanie: 15"}
]

function App() {
  return (
  <div>
    <h1>Internetowy sklep z eko-warzywami</h1>
  <div className='productgrid'>
    <Nazwa zmienna1={tablica[0]}/>
    <Nazwa zmienna1={tablica[1]}/>
    <Nazwa zmienna1={tablica[2]}/>
    <Nazwa zmienna1={tablica[3]}/>
  </div>
  </div>
  );
}

export default App;
