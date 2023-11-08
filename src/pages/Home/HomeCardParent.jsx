import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";


const HomeCardParent = () => {
    const foodItem = useLoaderData();

    return (
        <div>
           {foodItem.map((foodItem) => (
            <HomeCard
              key={foodItem._id}
              foodItem={foodItem}
              foodItems={foodItem} 
              
            ></HomeCard>
          ))}
        </div>
    );
};

export default HomeCardParent;