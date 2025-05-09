
import { createRoot } from 'react-dom/client'
import QuoteWithFetch from './Fetch API/QuoteWithFetch'
import QuoteWithAxios from './Axios/QuoteWithAxios'
import QuoteWithSWR from './SWR hook/QuoteWithSWR'
import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import QuoteWithReactQuery from './React Query/QuoteWithReactQuery'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <div style={{width: '80%'}}>
      <QuoteWithFetch />
      <QuoteWithAxios />
      <Suspense fallback={<h2>Loading ...</h2>
      }>
        <QuoteWithSWR/>
      </Suspense>
      <QueryClientProvider client={queryClient}>
        <QuoteWithReactQuery />
      </QueryClientProvider>
    </div>
)
