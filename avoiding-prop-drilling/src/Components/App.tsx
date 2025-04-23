import React, { Component } from 'react'

import { ThemeButton } from '../HOC/withThemeToggle'
import Content from './Content'
import ThemeContext from '../Contexts/ThemeContext'
import Button from './Button';
import AnimalFact from '../render-props/AnimalFact';



export class App extends Component {

    static contextType = ThemeContext;
    declare context: React.ContextType<typeof ThemeContext>;

    render() {
        const apiKey = 'API_KEY';
        const {theme} = this.context;
        return (
            <div>
                <div className='flex flex-col min-h-screen justify-center items-center'
                style={{
                    margin: '4px',
                    backgroundColor: theme === 'light' ? 'white': 'black',
                }}
                >
                    <div className='m-2 p-2 w-100'>
                        <AnimalFact
                        apiURL="https://openrouter.ai/api/v1"
                        apiKey={apiKey}
                        render={(fact, loading, error, animal, fetchFact) => (
                            <>
                                <div className='flex flex-row justify-between'>
                                    <Button
                                        onClick={() => fetchFact("cat")}
                                        theme = {theme}
                
                                    >
                                        Cat Facts
                                    </Button>
                                    <Button
                                        onClick={() => fetchFact("Dog")}
                                        theme = {theme}
                
                                    >
                                        Dog facts
                                    </Button>
                                </div>

                                <Content>
                                    {loading && <p>Fetching Animal Fact</p>}
                                    {error && <p className='text-red-600 text-xl font-bold'>Error: {error} </p>}
                                    {!loading && !error && fact && (
                                        <>
                                            <h1 className='text-xl font-bold mb-3'>
                                                {animal?.toUpperCase()}
                                            </h1>
                                            <p>
                                                {fact}
                                            </p>
                                        </>
                                    )}
                                    {!loading && !error && !fact && (
                                        <p>Click a button to get an animal fact!</p>
                                    )}
                                </Content>

                                <div className='gap-2 mt-5'>
                                    <ThemeButton/>
                                </div>

                            </>
                        )}
                        >
                        </AnimalFact>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default App
