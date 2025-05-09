import { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteWithAxios() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get(
                    'https://api.api-ninjas.com/v1/quotes',
                    {
                        headers: {
                            'X-Api-Key': 'kAe78rHsiRGBCbSx54svTQ==meegZpxT1mFMQafz'
                        }
                    });
                setQuote(response.data[0]); // Assuming the API returns an array of quotes
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
    if (!quote) return <div>No quote found</div>; // Additional safety check

    return (
        <div>
            <h1>Example with Axios Library</h1>
            <h2>Today's Quote</h2>
            <div style={{ paddingTop: '10px' }}>
                <h3>"{quote.quote}"</h3> {/* Access the `quote` property */}
                <p style={{fontWeight: 'bold'}}>- {quote.author}</p> {/* Display the author if available */}
            </div>
        </div>
    );
}