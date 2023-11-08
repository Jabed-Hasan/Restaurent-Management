import { useLoaderData } from "react-router-dom";
import OrderItemCard from "./OrderItemCard";
import { useState } from "react";

const MyOrderedItems = () => {
    const data = useLoaderData();
    const [items, setItems] = useState(data)
    console.log(data)
    // 
    return (
        <div className='grid md:grid-cols-2 gap-4 px-10 my-10'>
                    {

                        data.map(adata => <OrderItemCard key={adata} data={adata}
                        items ={items}
                        setItems = {setItems}
                        > </OrderItemCard>)
                    }
        </div>
    );
};

export default MyOrderedItems;