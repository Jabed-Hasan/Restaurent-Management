import { Link, useLoaderData } from "react-router-dom";
import Carts from "./Carts";
import { useContext } from "react"; // Import the context
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const MyaddedItems = () => {
    const foodscart = useLoaderData();
    const { user } = useContext(AuthContext); // Replace 'AuthContext' with your actual authentication context

    if (!user) {
        // Handle the case where the user is not logged in
        return <p>Please log in to view your carts.</p>;
    }

    const userEmail = user.email;

    const filteredCarts = foodscart.filter((cart) => cart.email === userEmail);

    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Added Food Items- Your Added Items</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {filteredCarts.length > 0 ? (
                <div className='grid md:grid-cols-2 gap-4'>
                    {filteredCarts.map((carts) => (
                        <Carts key={carts._id} cart={carts} />
                    ))}
                </div>
            ) : (
                <p className="text-4xl text-center my-20 ">No  foods added for this email. Please Add your Foods</p>
            )}
        </div>
    );
};

export default MyaddedItems;
