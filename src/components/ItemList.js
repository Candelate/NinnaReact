import React from 'react';
import { db } from './Firebase/Firebase';
import {colection. getDocs, query, where} from 'firebase/firestore'



export default function ItemList (props) {
    const productos = [{
    id: 1,
    nombre: "Bota lady",
    precio: 12000,
    stock: 3,
    descripcion: "ecocuero"       
    },
{
    id:2,
    nombre: "Bota jojo",
    precio: 12200,
    stock: 3,
    descripcion: "ecocuero"       
}]

return () => {
    <ItemList>

    </ItemList>
}
}
//if (cateogry) {
return (
    <Item />
    )
    }else{
    return("No hay nada amigo")
    }