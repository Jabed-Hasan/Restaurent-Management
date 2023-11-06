import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";


const AllFoodItems = () => {
    
    const foods = useLoaderData();
    console.log(foods);
    return (
        <div className="">
            <h1>Total Foods Items : {foods.length}</h1>

            <div className="grid md:grid-cols-2 gap-10">
            {
                foods.map(food => <FoodCard
                key={food._id}
                food={food}
                ></FoodCard>)
            }
            </div>
        </div>
    );
};

export default AllFoodItems;