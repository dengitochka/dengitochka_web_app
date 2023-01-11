import React, {useState, useEffect} from "react";
import "./Products.css";
import { fetchProducts } from "../services/products";

export function Products(props) {
    const [products, setProducts] = useState(null);
    console.log("refresh");
    console.log(products);

    useEffect(() => {
        if (products === null)
            fetchProducts()
                .then(products => setProducts(products));
    });

    return (
        <div className="list-products">
            {
                products?.map(product =>
                    <div key={product.id} className="product" onClick={() => props.handle(true, product.id)}>
                        <img src="/logo192.png" className="product-img"/>
                            <div className="product-title-price">
                                <p>{product.product_title}</p>
                            </div>
                    </div>
            )}
        </div>
    )
}