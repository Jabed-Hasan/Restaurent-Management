const HomeCard = ({ data }) => {
    const { foodName, foodImage, recipeDescription, chefName, foodCategory, price, quantity, countryOrigin, foodDetails } = data;

    return (
        <div className="card card-side bg-base-100 shadow-xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row">
            <figure className="mb-4 sm:mb-0 sm:mr-4">
                <img className="rounded-xl w-full h-[180px] object-cover" src={foodImage} alt="Food" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg sm:text-xl md:text-2xl">{foodName}</h2>
                <p className="text-sm mt-2">
                    <span className="font-semibold">Available items:</span> {quantity}
                </p>
                <button className="mt-2 p-1 px-3 text-white bg-yellow-700 rounded-lg">{foodCategory}</button>
                {/* Additional text content if needed */}
            </div>
        </div>
    );
};

export default HomeCard;
