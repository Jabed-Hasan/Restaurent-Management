import { useLoaderData } from "react-router-dom";
import OrderItemCard from "./OrderItemCard";
import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";


const MyOrderedItems = () => {
    const data = useLoaderData();
    const [items, setItems] = useState(data);
    const authContext = useContext(AuthContext);

    const loggedInUserEmail = authContext?.user?.email;

    // Filter the items based on the logged-in user's email
    const filteredItems = loggedInUserEmail
        ? items.filter(item => item.email === loggedInUserEmail)
        : [];

    return (
        <div className='grid md:grid-cols-2 gap-4 px-10 my-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Carts- Your Ordered Items</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {filteredItems.length > 0 ? (
                filteredItems.map(adata => (
                    <OrderItemCard key={adata} data={adata} items={items} setItems={setItems} />
                ))
            ) : (
                <div><h1 className="text-4xl font-bold text-center">No ordered items found for the logged-in user. Please Order to view your Carts</h1></div>
            )}
        </div>
    );
};

export default MyOrderedItems;
