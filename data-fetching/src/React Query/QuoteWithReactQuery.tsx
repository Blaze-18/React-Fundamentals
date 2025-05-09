import { useQuery } from '@tanstack/react-query';

const fetchQuote = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
        'X-Api-Key': 'kAe78rHsiRGBCbSx54svTQ==meegZpxT1mFMQafz'
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch quote');
    }
    return response.json();
    };

    export default function QuoteWithReactQuery() {
    const {
        data,
        error,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['quote'], // Unique key for the query
        queryFn: fetchQuote, 
        staleTime: 10000, 
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    if (!data) return <div>No quote found</div>;

    const quote = data[0]; // API returns an array

    return (
        <div>
            <div>
                <h1>Example with React Query</h1>
            </div>
        <h2>Today's Quote</h2>
        <div style={{ paddingTop: '5px' }}>
            <h3>"{quote.quote}"</h3>
            <p>- {quote.author}</p>
        </div>
        </div>
    );
}