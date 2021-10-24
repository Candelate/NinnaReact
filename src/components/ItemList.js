import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Firebase';
import Item from './Item'
import { collection, getDocs, query, where } from 'firebase/firestore/lite';



export default function ItemList () {

  // const [products, setProducts] = useState([])
  // const [loading, setLoading] = useState(true)
  
  // useEffect(()  => {
  //   if (!loading){
  //     setLoading(true)
  //     getDocs(collection(db, 'Items')).then((querySnapshot) => {
  //       const products = querySnapshot.docs.map(doc => {
  //         return {id: doc.id, ... doc.data()}
  //       })
  //       console.log(products)
  //       setProducts(products)
  //     })
  //   }else{
  //     setLoading(false)
  //   }},
  // [])

 return (
    
  <div className="ItemList">   
        <Item />
</div>
)}