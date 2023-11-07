import { Link, useLoaderData } from "react-router-dom";

import Carts from "./Carts";


const MyaddedItems = () => {

        const foodscart = useLoaderData();
        return (
            <div className='grid md:grid-cols-2 gap-4 '>
             
              {
                foodscart.map(carts => <Carts
                  key={carts._id} 
                  cart = {carts}
                  ></Carts>)
              }
          </div>
    );
};

export default MyaddedItems;