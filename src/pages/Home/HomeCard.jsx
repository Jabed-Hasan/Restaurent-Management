


const HomeCard = ({data}) => {

    const { foodName, foodImage,
        recipeDescription, 
        chefName,foodCategory, price, quantity, countryOrigin, foodDetails } = data;
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
            <p className="w-[150px]"><span className="font-semibold text-sm">Available items :</span>{quantity} </p>
               <button className="p-1 px-3 text-white bg-yellow-700 rounded-lg"> </button>
                
               
            </div>
           
            </div>
        </div>
    </div>
    );
};

export default HomeCard;