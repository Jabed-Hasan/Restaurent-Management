import { Link } from 'react-router-dom';

const HomeCard = ({ data }) => {
    const { _id, foodName, foodImage, foodCategory, price, quantity } = data;

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
            <div className="relative">
                <img 
                    className="w-full h-56 object-cover" 
                    src={foodImage} 
                    alt={foodName} 
                />
                <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                        {foodCategory}
                    </span>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{foodName}</h3>
                
                <div className="flex justify-between items-center mb-4">
                    <div className="text-orange-500 font-bold text-lg">
                        ${price}
                    </div>
                    <div className="text-sm text-gray-600">
                        {quantity} available
                    </div>
                </div>
                
                <div className="mt-4">
                    <Link 
                        to={`/food-detail/${_id}`}
                        className="block w-full py-2 px-4 bg-orange-100 hover:bg-orange-200 text-orange-500 text-center font-medium rounded-md transition duration-300"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
