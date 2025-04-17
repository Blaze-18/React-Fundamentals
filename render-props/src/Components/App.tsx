import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductGrid from './ProductGrid'

export class App extends Component {
    render(): React.ReactNode {
        return (
            <div>
                <div className='flex flex-col items-center border-2'>
                    <h1 className='text-2xl font-bold m-2 p-2'>Product List</h1>
                    <div>
                        <ProductList
                            render={({products, isLoading, error})=>{
                                if(isLoading) return <div><h1>Loading Products...</h1></div>
                                if(error) return <div><h1>Error Occured!</h1></div>
                                return (
                                    <ul>
                                        {products.map(product => (
                                            <li key={product.id} className='text-xl m-2 p-1 font-semibold'>
                                                {product.name} - BDT-{product.price}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }}
                        />
                    </div>
                    <h1 className='text-3xl font-bold'> Product Grid </h1>
                    <div>
                        <ProductGrid/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App