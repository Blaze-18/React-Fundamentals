interface HoverClounterProps {
    count: number, 
    incrementCount: () => void,
    theme: string,
    switchTheme: () => void
};
export default function HoverCounter({count, incrementCount, theme, switchTheme}: HoverClounterProps){
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : {backgroundColor: 'blue', color: 'yellow'};
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    )
}