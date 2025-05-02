import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";



const UpdateFood = () => {
    const Food = useLoaderData();
    const { user } = useContext(AuthContext);
  
    console.log(Food)
    const  {_id,name,price,foodCategory,details,quantity,image,origin} = Food
    console.log(user?.displayName);
    const handleUpdateFood = event => {
        event.preventDefault();
        event.preventDefault();
        const form = event.target;
        const name  = form.name.value;
        const price  = form.price.value;
        const foodCategory  = form.foodCategory.value;
        const details  = form.details.value;
        const quantity  = form.quantity.value;
        const image  = form.image.value;
        const origin = form.origin.value;
        const addby = form.addby.value;
        const email = form.email.value

       // const Addby =  user.email;
       const UpdateFood = {name,price,foodCategory,details,quantity,image,origin,addby,email}
        console.log(UpdateFood)
       

        fetch(`http://localhost:4000/myItems/update/${_id}`, {

            method:'PUT',
            headers:{
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(UpdateFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div className="bg-[#F4F3F0] p-24">
        <h1 className='text-xl font-bold text-center'>Update Food Item : {name}</h1>

        <form onSubmit={handleUpdateFood}>
            {/* form name and quantity Control */}
        <div className="md:flex mb-8">
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="name" placeholder="Food Name" defaultValue={name} className="input input-bordered w-full" />
            </label>
        </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Price</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-full" />
            </label>
        </div>
    </div>
            {/* form  Supplier and taste Control */}
        <div className="md:flex mb-8">
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Food category</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="foodCategory" placeholder="Food category" defaultValue={foodCategory} className="input input-bordered w-full" />
            </label>
        </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="details" placeholder="Product details" defaultValue={details} className="input input-bordered w-full" />
            </label>
        </div>
    </div>
            {/* form category ad Details Control */}
        <div className="md:flex mb-8">
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Photo URL </span>
            </label>
            <label className="input-group">
                
                <input type="text" name="image" placeholder="Image Url " defaultValue={image} className="input input-bordered w-full" />
            </label>
        </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="quantity" placeholder="Food quantity" defaultValue={quantity} className="input input-bordered w-full" />
            </label>
        </div>
       
    </div>



    <div className="md:flex mb-8">
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Add By </span>
            </label>
            <label className="input-group">
                
                <input type="text" name="addby" placeholder=" " defaultValue={user?.displayName}  className="input input-bordered w-full border-[1px]" readOnly  disabled style={{ backgroundColor: 'lightgray', borderColor: 'darkgray' }} />
            </label>
        </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Food Origin</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="origin" placeholder="Food Origin" defaultValue={origin} className="input input-bordered w-full" />
            </label>
        </div>
       
    </div>
    <div className="md:flex mb-8">
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">User Email </span>
            </label>
            <label className="input-group">
                
                <input type="text"  name="email"  placeholder=" " defaultValue={user?.email} disabled style={{ backgroundColor: 'lightgray', borderColor: 'darkgray' }} className="input input-bordered w-full" />
            </label>
        </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Made By</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="madeby" placeholder="Food Origin" defaultValue={origin} className="input input-bordered w-full" />
            </label>
        </div>
       
    </div>


    
   
        
    {/* form category ad Details Control */}
   
       
        <input type="submit" value="Update Food Item" className="btn btn-block bg-slate-600 text-white" />
    </form>
    </div>
    );
};

export default UpdateFood;