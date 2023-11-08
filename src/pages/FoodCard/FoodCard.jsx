import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {

    const { _id,foodName, foodImage, foodCategory, price, quantity, countryOrigin, foodDetails } = food;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="rounded-xl w-[250px] h-[180px]" src={foodImage} alt="Movie" /></figure>
            <div className="card-body">
                <div className="items-center gap-20">
                    <h2 className="card-title">{foodName}
                    </h2>
                    
                </div>
                <div className="flex flex-row gap-24">
                <div>
                   <button className="p-1 px-3 text-white bg-yellow-700 rounded-lg"> {foodCategory}</button>
                    
                    <p className="w-[150px]"><span className="font-semibold text-sm">Available items :</span>  {quantity}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/food-detail/${_id}`}>
                    <button className="btn btn-primary bg-orange-400 text-white hover:text-black border-none ">Details</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
        
    );
};

export default FoodCard;