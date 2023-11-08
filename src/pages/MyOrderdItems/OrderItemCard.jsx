import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const OrderItemCard = ({data,items,setItems}) => {
    const { user } = useContext(AuthContext);
    console.log(user?.displayName);
    console.log(user?.email);
    const { _id,foodName, image,
            recipeDescription,name, 
            chefName,foodCategory, price, quantity, countryOrigin, foodDetails } = data;

            const handleDelete = _id => {
                console.log(_id);
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                    
                    fetch(`http://localhost:4000/Carts/${_id}`,{
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                              )
                              setTimeout(function (){
                                window.location.reload();
                              },2000)
                              // eslint-disable-next-line react/prop-types
                              const remaining = data.filter(item => item._id!==_id)
                              setItems(remaining);


                        }
                    })
                    }
                  })
            }
            
    return (
        <div className="flex justify-between bg-base-100 shadow-xl">
      <figure>
        <img className="w-[250px] h-[200px]" src={image} alt="Product" />
      </figure>
      <div className="flex justify-between gap-2 p-5">
        <div>
        <p>{user?.displayName}</p>
          <h2 className="card-title">Name: {name}</h2>
          <p>Price: {price}</p>
          
          <p>Quantity: {quantity}</p>
        </div>
        <div className="btn-group btn-group-vertical space-y-4">
          <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">
            X
          </button>
        </div>
      </div>
    </div>
    );
};

export default OrderItemCard;