
import Swal from 'sweetalert2'

import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddFoodItem = () => {

    const { user } = useContext(AuthContext);
    const handleAddcoffee = event => {
       
        console.log(user?.displayName);
        //const {user} = useContext(AuthContext)
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
        const email = form.email.value;
        const username = form.email.value;
       // const Addby =  user.email;
        const newItems = {name,price,foodCategory,details,quantity,image,origin,addby,email,username}
        console.log(newItems)


        fetch(`https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/myItems`, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItems)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfuly',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }



    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className='text-xl font-bold text-center'>Add a Food Item</h1>

            <form onSubmit={handleAddcoffee}>
                {/* form name and quantity Control */}
            <div className="md:flex mb-8">
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Food Name</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="name" placeholder="Food Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                    
                    <input type="text" name="foodCategory" placeholder="Food category" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Short Description</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="details" placeholder="Product details" className="input input-bordered w-full" />
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
                    
                    <input type="text" name="image" placeholder="Image Url " className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="quantity" placeholder="Food quantity" className="input input-bordered w-full" />
                </label>
            </div>
           
        </div>



        <div className="md:flex mb-8">
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Add By </span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name='addby'  placeholder=" "  className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Food Origin</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="origin" placeholder="Food Origin" className="input input-bordered w-full" />
                </label>
            </div>
           
        </div>
    
       
        <div className="md:flex mb-8">
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">User Name </span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name='username'  placeholder=" " defaultValue={user?.displayName} className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">User Email</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="email" placeholder="" defaultValue={user?.email} className="input input-bordered w-full" />
                </label>
            </div>
           
        </div>
           
      


        
       
            
        {/* form category ad Details Control */}
       
           
            <input type="submit" value="Add Food Item" className="btn btn-block bg-slate-600 text-white" />
        </form>
        </div>
    );
};

export default AddFoodItem;