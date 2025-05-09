import { useState, useEffect } from "react";

export default function QuoteWithFetch() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(
                    'https://api.api-ninjas.com/v1/quotes',
                    {
                        headers: {
                            'X-Api-Key': 'kAe78rHsiRGBCbSx54svTQ==meegZpxT1mFMQafz'
                        }
                    });
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setQuote(data[0]); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchQuote();
    }, []);

    if (loading) return <div><h1>Loading...</h1></div>;
    if (error) return <div>Error: {error}</div>;
    if (!quote) return <div>No quote found</div>; 

    return (
        <div>
            <h1>Example with Fetch Function</h1>
            <h2>Today's Quote</h2>
            <div style={{ paddingTop: '10px' }}>
                <h3>"{quote.quote}"</h3> 
                <p style={{fontWeight: 'bold'}}>- {quote.author}</p> 
            </div>
        </div>
    );
}