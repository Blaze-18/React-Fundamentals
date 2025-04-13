export interface Product {
    id: number,
    name: string,
    dsescription: string,
    price: number,
    rating: number,
    category: string,
    image: string,
    inStock: boolean
}
export interface ProductListRenderProps {
    products: Product[],
    isLoading: boolean,
    error: Error | null
}