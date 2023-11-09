import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Purchase = () => {
    const Food = useLoaderData();
    const { user } = useContext(AuthContext);

    const {
        _id,
        foodName,
        price,
        foodCategory,
        foodDetails,
        quantity: availableQuantity,
        
        foodImage,
        countryOrigin,
        chefName,
        
    } = Food;

    const [quantity, setQuantity] = useState(1);

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };

    const handleUpdateFood = event => {
        event.preventDefault();

        if (quantity > availableQuantity) {
            Swal.fire({
                title: 'Error!',
                text: `Available Quantity is ${availableQuantity}.You cannot purchase more than the available quantity.`,
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } else {
            const form = event.target;
            const name = form.name.value;
            const price = form.price.value;
            const foodCategory = form.foodCategory.value;
            const details = form.details.value;
            const date = getCurrentDate();
            const origin = form.origin.value;
            const addby = form.addby.value;
            const email = form.email.value;
            const image = form.image.value;
            const madeby = form.madeby.value;

            const UpdateFood = {
                name,
                price,
                foodCategory,
                details,
                quantity,
                date,
                origin,
                addby,
                email,
                madeby,
                image
            };

            console.log(UpdateFood);

            fetch(`https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/food-detail/purchase/${_id}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(UpdateFood),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Add to Cart Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool',
                        });
                    }
                });
        }
    };

    const handleQuantityChange = event => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    };

    return (
        <div className="bg-[#F4F3F0] p-24">
             <div className='text-center'>
             <img className='w-[400px] h-[400px] mx-auto rounded-full ' src= {foodImage} alt="" />
             </div>

           <h1 className='text-4xl font-bold text-center my-5'>Purchage Your Food</h1>
            <h1 className="text-xl font-bold text-center">Purchase Food Item : {foodName}</h1>

            <form onSubmit={handleUpdateFood}>
                <div className="md:flex mb-8">
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Food Name"
                                defaultValue={foodName}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                defaultValue={price}
                                disabled
                                style={{ backgroundColor: 'lightgray', borderColor: 'darkgray' }}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Food category</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="foodCategory"
                                placeholder="Food category"
                                defaultValue={foodCategory}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="details"
                                placeholder="Product details"
                                defaultValue={foodDetails}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Current Date</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="date"
                                placeholder="Date"
                                defaultValue={getCurrentDate()}
                                className="input input-bordered w-full" disabled
                                style={{ backgroundColor: 'lightgray', borderColor: 'darkgray' }}
                            />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Quantity Available : {availableQuantity}</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Food quantity"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Add By</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="addby"
                                placeholder=" "
                                defaultValue={user?.displayName}
                                disabled
                                style={{ backgroundColor: 'lightgray', borderColor: 'darkgray' }}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Food Origin</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="origin"
                                placeholder="Food Origin"
                                defaultValue={countryOrigin}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="email"
                                placeholder=" "
                                defaultValue={user?.email}
                                disabled
                                style={{ backgroundColor: 'lightgray', borderColor: 'darkgray' }}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Made By</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="madeby"
                                placeholder="Food Origin"
                                defaultValue={chefName}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="form-control ml-4 mb-2">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="image"
                                placeholder=" "
                                defaultValue={foodImage}
                                disabled
                                style={{ backgroundColor: 'lightgray', borderColor: 'darkgray' }}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                <input
                    type="submit"
                    value="Purchase Food"
                    className="btn btn-block bg-orange-400 hover:text-black text-white"
                />
            </form>
        </div>
    );
};

export default Purchase;
