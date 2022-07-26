import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"
import dataProducts from '../Data/Data'
import firestoreDB from '../../services/firebaseConfig'
import { getDocs, collection} from 'firebase/firestore'


function ItemListContainer(){
    const [data, setData] = useState([]);
    const idCategory = useParams().idCategory

    function getProducts() {
        return new Promise((resolve) => {
            const productosCollection = collection(firestoreDB, "productos")
            getDocs(productosCollection).then (snapshot =>{
                const docsData = snapshot.docs.map ( doc =>{
                    return{ ...doc.data(), id: doc.id}
                }
                )
                resolve(docsData)
            } )
            
        })
        }
        
    useEffect(() => {
        getProducts().then((respuesta) => {
            
            if(idCategory === undefined){
                
                setData(respuesta)
            }
            else{
                let itemsFilter = dataProducts.filter(element => element.category === idCategory)
                setData(itemsFilter)
            }
        })

    
}, [idCategory])

    return(
        <main>
            <>
            <div className='cards'>
                <ItemList data={data}/>
            </div>
            </>
        </main>
    )
}


export default ItemListContainer 