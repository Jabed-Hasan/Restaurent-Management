import { useLoaderData } from "react-router-dom";


const FoodDetailCard = () => {
    const food = useLoaderData();
    const { _id, foodName, foodImage,
        recipeDescription, 
        chefName,foodCategory, price, quantity, countryOrigin, foodDetails } = food;
    return (
        <div>
            

            <div className="flex justify-around bg-base-100 gap-20 mx-20 ">
                <img className="w-1/2 h-[450px]" src={foodImage} alt="Movie" />
                <div className=" w-1/2">
                    <div className="flex items-center gap-10 ">
                    <h2 className="text-4xl font-bold my-5">{foodName}</h2>
                    <button className="px-2 py-1 rounded-lg text-white  bg-orange-700">{foodCategory}</button>
                    </div>
                    <p className="mb-5">{recipeDescription}</p>
                      < >
                     <div className="flex items-center gap-20">
                     <div className="flex items-center gap-2">
                      <img className="w-[40px] h[40px] " src="https://i.ibb.co/Tmndc5c/Screenshot-144.png" alt="" />
                      <p className=""><span className="font-semibold">Chef Name: </span>{chefName}</p>
                      </div>
                      <div className="flex items-center gap-2">
                      <img className="w-[40px] h[40px] " src="https://i.ibb.co/X7hfwk3/orange-location-icon-png-18.png" alt="" />
                      <p className=""><span className="font-semibold">Country Origin: </span>{countryOrigin}</p>
                      </div>
                     </div>
                       
                      </>
                    <div className="text-center">
                        <button className="px-10 py-2 my-2 bg-orange-500 rounded-xl text-white font-bold">order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailCard;