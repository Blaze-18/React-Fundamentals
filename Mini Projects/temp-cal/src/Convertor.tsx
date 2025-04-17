export default class Convertor{
    toCelsius(value: string): number{
        const tempVal = parseFloat(value) ;
        const celsius = (tempVal - 32) * 5 / 9;
        return Math.round(celsius * 1000)/1000;
    }
    toFahrenheit(value: string): number{
        
        const tempVal = parseFloat(value);
        const fahrenheit = (tempVal * 9 / 5) + 32;
        return Math.round(fahrenheit*1000)/1000;
    }
}