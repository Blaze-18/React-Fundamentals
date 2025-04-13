import React, { Component } from 'react'



export class ButtonCom extends Component {
    addBuutonConfig = (btn:string) => `${btn}`; 
    render(overrideText: string, overrideBtnText: string){
        let text = 'This is a normal button';
        let btn = 'Default'
        if(overrideText){
            text = overrideText;
        }
        if(overrideBtnText){
            btn = overrideBtnText;
        }
        return (
            <div className='flex justify-start items-center gap-3'>
                <h1 className='text-2xl font-bold'>{text}</h1>
                <button
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                >
                    {btn}
                </button>
            </div>
        )
    }
}

export default ButtonCom;