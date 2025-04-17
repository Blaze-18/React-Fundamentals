import React, { Component } from 'react'
import { Product, ProductListRenderProps } from '../types';

interface ProductListProps{
    render: (props: ProductListRenderProps) => React.ReactNode;
}
interface ProductListState{
    products: Product[],
    isLoading: boolean;
    error: Error | null
}
export class ProductList extends Component<ProductListProps, ProductListState> {
    state: ProductListState = {
        products: [],
        isLoading: true,
        error: null
    }
    fetchProducts = () =>{
        const URL = 'https://api.jsonbin.io/v3/b/67fbd3de8561e97a50fe9ff7';
        this.setState({
            isLoading: true,
            error: null
        });
        fetch(URL, {
            headers: {
                'X-Master-Key': '$2a$10$hzsFfM57ghIiD1WThdgK6uS3a5sZSXDBVUkJhN3fr7LoKVR93wSXi'
            }
        })
            .then(res => {
                if(!res.ok){
                    throw new Error("Failed To fetch Product Data");
                }
                return res.json();
            })
            .then(data =>{
             if(!data.record?.products){
                throw new Error('Invalid data structure');
             }
             this.setState({products: data.record.products});   
            })
            .catch(error => this.setState({error}))
            .finally(() => this.setState({isLoading: false}))
    }
    componentDidMount(): void {
        this.fetchProducts()
    }
    render(): React.ReactNode {
        return this.props.render({
            ... this.state
        })
    }
}

export default ProductList;