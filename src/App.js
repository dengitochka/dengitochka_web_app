import './App.css';
import React, {useEffect, useState, useCallback} from "react";
import { Products } from './products/Products.js';
import FadeInOut from "./additionalComponents/FadeInOut.js";
import { Product } from './products/product/Product.js';
import sendCreditHistory from "./services/order";
export const tg = window.Telegram.WebApp;

export default function App() {
  const [isSelectedProduct, SetSign] = useState(false);
  const [productId, SetId] = useState(0);

  let handleSelectedProduct = (sign, productId) => {
    SetSign(sign);
    SetId(productId);
  }
  
  let useSendCreditHistory = useCallback(() => 
        sendCreditHistory(tg.initDataUnsafe.user.id), []);

  useEffect(() => {
    tg.MainButton.show();
    if (isSelectedProduct) {
      console.log(isSelectedProduct)
      tg.MainButton.text = 'Получить ки';
      tg.MainButton.color = '#11c611';
      tg.MainButton.onClick(() => useSendCreditHistory)
    }
    else {
      console.log(isSelectedProduct)
      tg.MainButton.text = 'Перейти в чат';
      tg.MainButton.color = '#2c73cf';
      console.log(tg.MainButton);
      tg.MainButton.offClick(() => useSendCreditHistory)
      tg.MainButton.onClick(() => tg.close())
    }
  });

  tg.BackButton.isVisible = true;
  tg.BackButton.onClick(() => SetSign(false));
  let duration = 800;

  return (
    <div>
        {
        isSelectedProduct ? 
          <FadeInOut key="1" show={isSelectedProduct} duration={duration} style={{}}> 
            <Product productId={productId} done={true} sendCreditHistory={useSendCreditHistory}/> 
          </FadeInOut> : 
          <FadeInOut key="2" show={!isSelectedProduct} duration={duration} style={{}}> 
            <Products handle={handleSelectedProduct}/>
          </FadeInOut>
        }
    </div>
  );
}