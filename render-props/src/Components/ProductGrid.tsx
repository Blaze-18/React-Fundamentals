import React, { Component } from 'react'
import { Product } from '../types';
import ProductList from './ProductList';

const ProductCard: React.FC<{product: Product}> = ({product}) => (
    <div id='product-card' className='border-2 p-4 m-2'>
        <h3>{product.name}</h3>
        <p>{product.dsescription}</p>
        <ul>
            <li>Category: {product.category}</li>
            <li>Stock: {product.inStock ? 'In Stock': 'Out Of Stock'}</li>
            <li>Price: {product.price}</li>
            <li>Rating: {product.rating}</li>
        </ul>
    </div>
)

export class ProductGrid extends Component {
    render() {
        return (
            <div>
                <div>
                    <ProductList
                        render = {({products,isLoading}) => (
                            <div>
                                {
                                    isLoading? (
                                        <div>Loading Products ....</div>
                                    ) : (
                                        products.map(product =>(
                                            <ProductCard key={product.id} product={product}></ProductCard>
                                        ))
                                    ) 
                                }
                            </div>
                        )}
                    >
                    </ProductList>
                </div>
            </div>
        )
    }
}

export default ProductGrid;