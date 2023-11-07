
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Contac from "../pages/About/Contac"
import MyCart from "../pages/MyCart/MyCart";
import Details from "../pages/Details/Details";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Carts from "../pages/MyCart/Carts";
import AddFoodItem from "../pages/AddFoodItem/AddFoodItem";
import Blogs from "../pages/Blogs/Blogs";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/products/:brandName',
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: () => fetch(`http://localhost:4000/products`)
            },
            
            {
                path: '/AddFood',
                element: <PrivateRoute>
                    <AddFoodItem></AddFoodItem>
                </PrivateRoute>,
                loader: () => fetch('/Data.json')
            },
            {
                path: '/MyCart',
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>,
                //loader: () => fetch('http://localhost:4000/myCart')
                
            },
            {
                path: '/Carts',
                element: 
                   <PrivateRoute>
                    <Carts></Carts>
                   </PrivateRoute>,
                loader: () => fetch('http://localhost:4000/myCart')
                
            },
            {
                path: '/Products/:brandName/update/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:4000/products/update/${params.id}`)
            },
            {
                path: '/Products/:brandName/productDetails/:id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
              loader: ({params}) => fetch(`http://localhost:4000/products/productDetails/single/${params.id}`)
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/About',
                element: <Contac></Contac>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/All-Foods',
                element: <AllFoodItems></AllFoodItems>,
                loader: () => fetch('http://localhost:4000/FoodItems')
            
            },




        ]
    }
]);

export default routes;