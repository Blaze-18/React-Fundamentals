import React, { Component } from 'react'
import TempInput from './TempInput';
import Convertor from './Convertor';

interface CalculatorStates {
    scale: string,
    inputValue: string,
}
export class Calculator extends Component<object,CalculatorStates> {

    constructor(props:object ){
        super(props);
        this.state = {
            scale:'c',
            inputValue: '0'
        }
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, scale: string) =>{
        this.setState({
            inputValue: event.target.value,
            scale: scale
        })
    }

    render():React.ReactNode {
        const convert = new Convertor;
        const {scale, inputValue} = this.state;
        const celsius = scale === 'f' ? convert.toCelsius(inputValue) : inputValue;
        const fahrenheit = scale === 'c' ? convert.toFahrenheit(inputValue): inputValue; 

        
        return (
            <div className='flex flex-col min-h-screen justify-center items-center'>
                <div className='flex flex-col justify-center items-center border-4 m-3 p-8 rounded-2xl border-gray-500'>
                    <h1 className='text-2xl font-bold mb-8'>Convertor</h1>
                    <TempInput scale='c' value={celsius} onInputChange={(event) => this.handleInputChange(event, 'c')}></TempInput>
                    <TempInput scale='f' value={fahrenheit} onInputChange={(event)=> this.handleInputChange(event, 'f')}></TempInput>
                    {(celsius >= 100 || fahrenheit >= 212 ) &&
                        <div className='flex justify-center items-center m-3 p-2 bg-amber-500 text-cyan-950 rounded-xl'>
                            <h1 className='font-bold'>Reached Boiling Temperature</h1>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Calculator;