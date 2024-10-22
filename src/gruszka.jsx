import './gruszka.css';

function Nazwa(props){return(<div className="kom">
<img src={props.zmienna1.zdj}/> <br />
<h1>{props.zmienna1.name}</h1>
<h3>{props.zmienna1.opis}</h3>
<h3>{props.zmienna1.stan}</h3>
<h2>{props.zmienna1.cena}</h2>
</div>);}

export default Nazwa;