import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



export default function ItemList (props) {
    const test = db
    const [items, setItems] = useState([])
    const [loading, setLoanding] = useState(false)
    useEffect(()  => {
        setLoanding(true);
        const itemCollection = collection(db,"Items");
        getDocs(itemCollection).then((QuerySnapshot)=>{
          if (QuerySnapshot.size===0){
              console.log('No hay resultados');
        }
          setItems (QuerySnapshot.docs.map(doc => doc.data()));
          console.log (items)
        }).catch((error) =>{
            console.log ("Error en los items", error);
        }).finally (()=> {
            setLoanding(false);
  
          });
  
    },[]);
      return () => {
      <>
      {items.length!==0?(
       <div></div>   
      ):<p>No hay productos</p>}
      </>
    }
}