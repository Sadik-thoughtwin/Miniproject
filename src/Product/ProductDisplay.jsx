import { useDispatch, useSelector } from "react-redux";
import React,{useEffect} from "react";
import { Card } from 'antd';

import { getProduct } from "../Redux/actions/getProductAction";
import './ProductDisplay.css';
export function ProductDisplay() {
  const dispatch = useDispatch();
  
  useEffect(() => {
     dispatch(getProduct());
  },[]);    
  const product = useSelector((state) => state?.getProductReducer?.productList
  );
  return (
    <div className="list-item">
     {product?.map((allProduct, index) => {
        return (
         <Card key={index} className="card-data">
              <img src={allProduct.imgUrl}  width="200" height="200" alt="img"/> 
              <h2 >{allProduct.price}</h2>
              <h2 >{allProduct.category.type}</h2>
           </Card>
        );
      })}
    </div>
  );
}


