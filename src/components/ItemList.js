import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Firebase';
import Item from './Item'
import { collection, getDocs, query, where } from 'firebase/firestore/lite';



export default function ItemList (filter) {



 return (
    
  <div className="ItemList">   
        <Item filter={filter} />
</div>
)}