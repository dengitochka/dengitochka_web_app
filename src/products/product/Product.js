import "./Product.css";
import { fetchProduct } from "../../services/products";
import sendCreditHistory from "../../services/order";
import React, {useState, useEffect} from "react";
import {tg} from "../../App"

export function Product(props) {
    const [product, setProduct] = useState(null);
    const description = 'Услуги по предоставлению кредитных отчётов на основании информации (кредитных историй), находящейся в принадлежащей АО «НБКИ» специализированной электронной базе данных, формируемой и пополняемой АО «НБКИ» на ежедневной основе'
    console.log(props.productId);
    useEffect(() => {
        console.log("refresh");
        if (product === null)
            fetchProduct(props.productId)
                .then(product => setProduct(product));
    });

    tg.MainButton.onClick(() => sendCreditHistory(tg.initDataUnsafe.user.id));
    return (
        <div className="main-order">
            <div className="header-order">
                <p>Ваш заказ</p>
                <div>
                    <img src="/logo192.png"/>
                    <p>{product?.product_title}</p>
                </div>
            </div>
            <div id="description">
                {description}
            </div>
        </div>
    )
}