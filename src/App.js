import './App.css';
import React, {useEffect, useState} from "react";
import { Products } from './products/Products.js';
import FadeInOut from "./additionalComponents/FadeInOut.js";
import { Product } from './products/product/Product.js';
export const tg = window.Telegram.WebApp;

export default function App() {
  const [isSelectedProduct, SetSign] = useState(false);
  const [productId, SetId] = useState(0);

  let handleSelectedProduct = (sign, productId) => {
    SetSign(sign);
    SetId(productId);
  }
  
  useEffect(() => {
    if (isSelectedProduct) {
      tg.MainButton.show();
    }
    else {
      tg.MainButton.hide();
    }
  });

  tg.MainButton.text = 'ПОЛУЧИТЬ КИ';
  tg.MainButton.color = '#11c611';
  tg.BackButton.isVisible = true;
  tg.BackButton.onClick(() => SetSign(false));
  let duration = 800;

  return (
    <div>
        {
        isSelectedProduct ? 
          <FadeInOut key="1" show={isSelectedProduct} duration={duration} style={{}}> 
            <Product productId={productId} done={true}/> 
          </FadeInOut> : 
          <FadeInOut key="2" show={!isSelectedProduct} duration={duration} style={{}}> 
            <Products handle={handleSelectedProduct}/>
          </FadeInOut>
        }
    </div>
  );
}