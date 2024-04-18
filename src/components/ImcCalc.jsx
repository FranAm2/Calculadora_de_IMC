import { Button } from "./Button"
import "./ImcCalc.css"
import { useState } from "react"
import React from 'react'

export const ImcCalc = ({calcImc}) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) =>{
        e.preventDefault();
        setWeight("");
        setHeight("");
    }

    const ValidDigits = (text) =>{
        return text.replace(/[^0-9,]/g, "");
    }

    const handleHeightChange = (e) =>{
        const updatedValue = ValidDigits(e.target.value);
        setHeight(updatedValue);
    }

    const handleWightChange = (e) =>{
        const updatedValue = ValidDigits(e.target.value);
        setWeight(updatedValue);
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" id="height"
                    placeholder="Ex: 1,75" 
                    onChange={(e) => handleHeightChange(e)} value={height}/>
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight"
                    placeholder="Ex: 70,5"
                    onChange={(e) => handleWightChange(e)} value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular"
                action={(e) =>calcImc(e, height, weight)}/>
                <Button id="clean-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}
