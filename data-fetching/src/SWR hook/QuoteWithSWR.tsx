import useSWR from 'swr';

// Define a fetcher function (Axios or fetch)
const fetcher = async (url: string) => {
    const res = await fetch( url, {
        headers: {
        'X-Api-Key': 'kAe78rHsiRGBCbSx54svTQ==meegZpxT1mFMQafz',
        },
    });
    if (!res.ok) throw new Error('Failed to fetch quote');
    return res.json();
};

export default function QuoteWithSWR() {
    const { data, error } = useSWR(
        'https://api.api-ninjas.com/v1/quotes',
        fetcher,
        {
            suspense: true
        }
    );

    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>No quote found</div>;

    const quote = data[0]; // API returns an array

    return (
        <div>
        <div><h1>Example with SWR</h1></div>
        <h2>Today's Quote</h2>
        <div style={{ paddingTop: '5px' }}>
            <h3>"{quote.quote}"</h3>
            <p style={{fontWeight: 'bold'}}>- {quote.author}</p>
        </div>
        </div>
    );
}