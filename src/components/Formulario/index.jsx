import { useState } from "react";
import './formulario.css'

const Formulario = () => {
    let [seuPeso, setSeuPeso] = useState(0)
    let [suaAltura, setSuaAltura] = useState(0)

    const renderizaResult = () => {
        if (seuPeso <= 0 || suaAltura <= 0) {
            return(
                <p>Digite os valores válidos!!</p>
            )
        }

        const alturaEmMetros = suaAltura / 100;
        const alturaAoQuadrado = alturaEmMetros * alturaEmMetros;
        const IMC = (seuPeso / alturaAoQuadrado).toFixed(2);

        if (IMC < 18.5) {
            return(
                <p>Abaixo do peso, seu IMC: {IMC}</p>
            )
        } else if (IMC >= 18.5 && IMC < 24.9) {
            return(
                <p>Peso equilibrado, seu IMC: {IMC}</p>
            )
        } else if (IMC >= 25 && IMC < 29.9) {
            return (
                <p>Está com sobrepeso, seu IMC: {IMC}</p>
            )
        } else if (IMC > 30) {
            return(
                <p>Está com obesidade, seu IMC: {IMC}</p>
            )
        } else {
            return(
                <p>Digite os valores</p>
            )
        }
    }

    return(
        <div className="containeir">
            <form className="form">
                <input className="formInput" type="number" required placeholder="Digite seu peso (Kg)" onChange={evento => setSeuPeso(parseFloat(evento.target.value))} />
                <input className="formInput" type="number" required placeholder="Digite sua altura (cm)" onChange={evento => setSuaAltura(parseFloat(evento.target.value))} />
            </form>
            <div className="result">
                {renderizaResult()}
            </div>
        </div>
    )
}

export default Formulario;