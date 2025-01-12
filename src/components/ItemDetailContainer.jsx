import React from 'react';
import { useState, useEffect } from 'react';
import { getAsyncItemById } from "../data/getAsyncData";
import CardProduct from './CardProduct';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        async function getItem() {
            const data = await getAsyncItemById(id);
            setItem(data);
        }
        getItem();
    },[id]);

return <CardProduct {...item}/>;

}

export default ItemDetailContainer;