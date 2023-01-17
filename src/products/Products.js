import React, {useState, useRef, useEffect} from "react";
import "./Products.css";
import { fetchProducts } from "../services/products";

export function Products(props) {
    const [products, setProducts] = useState(null);
    const [productId, setProductId] = useState(false);
    const dataFetchedRef = useRef(false);

    useEffect(() => {
        
        console.log("useEffect");
        if (!dataFetchedRef.current)
            fetchProducts()
                .then(products => setProducts(products));

    return () => {
        dataFetchedRef.current = true;
    }
    }, [products]);

    return (
        <div className="list-products">
            {
                products?.map(product =>
                    <div 
                        key={product.id} 
                        className="product" 
                        onClick={() => props.handle(true, product.id)}  
                        onMouseOver={() => setProductId(product.id)}
                        onMouseOut={() => setProductId(null)}>
                        <img src="/bookkeeping-icon.png" className="product-img"/>
                            <div className="product-title-price">
                                <p className={product.id ===  productId ? "product-title-focus" : null}>{product.product_title}</p>
                            </div>
                    </div>
            )}
        </div>
    )
}