interface inputProps {
    scale:string,
    value:string|number,
    onInputChange(e: React.ChangeEvent<HTMLInputElement>, scale: string): void
}
export default function TempInput({scale, value, onInputChange}: inputProps){
    const scaleName = scale === 'f' ? "Fahrenheit": 'Celscius';
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        onInputChange(e, scale);
    }
    return (
        <>
            <label htmlFor={scale} className="font-semibold">{scaleName}</label>
            <input type="text" 
                name={scaleName} 
                className="m-2 p-2 border-2 rounded-xl"
                onChange={handleChange}
                value={value}
                
            />
        </>
    )
}
