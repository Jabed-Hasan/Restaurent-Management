import React from 'react';
import { Link } from 'react-router-dom';

const Carts = ({ cart }) => {
  const { _id,name, price, foodCategory, details, quantity, image, origin } = cart;

  return (
    // <div className="card card-side bg-base-100 shadow-xl">
    //   <figure>
    //     <img src={foodImage} alt="Product" />
    //   </figure>
    //   <div className="flex justify-between w-full pr-4">
    //     <div>
    //       <h2 className="card-title">Name: {foodName}</h2>
    //       <p>Price: {price}</p>
    //       <p>Category: {foodCategory}</p>
    //       <p>Quantity: {quantity}</p>
    //     </div>
    //     {/* <div className="btn-group btn-group-vertical space-y-4">
    //       <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">
    //         X
    //       </button>
    //     </div> */}
    //   </div>
    // </div>


    <div className="card card-side bg-base-100 shadow-xl mx-10">
      <figure><img className="rounded-xl w-[250px] h-[180px]" src={image} alt="Movie" /></figure>
      <div className="card-body">
        <div className="items-center gap-20">
          <h2 className="card-title">{name}
          </h2>
        </div>
        <div className="flex flex-row gap-24">
          <div>
           <h2>Price : ${price}</h2>
            <p className="w-[150px]"><span className="font-semibold text-sm">Available items :</span>  {quantity}</p>
          </div>
          <div className="card-actions">
           <Link to={`/myItems/update/${_id}`}> <button className="btn btn-primary bg-orange-400 text-white hover:text-black border-none ">Update</button></Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Carts;