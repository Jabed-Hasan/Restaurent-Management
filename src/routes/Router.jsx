
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Contac from "../pages/About/Contac";


import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AddFoodItem from "../pages/AddFoodItem/AddFoodItem";
import Blogs from "../pages/Blogs/Blogs";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyaddedItems from "../pages/myAddedItems/MyaddedItems";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import FoodDetailCard from "../pages/FoodDetails/FoodDetailCard";


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
                path: '/AddFood',
                element: <PrivateRoute>
                    <AddFoodItem></AddFoodItem>
                </PrivateRoute>,
                 
              
            },
          
            {
                path: 'myItems/update/:id',
                element: <PrivateRoute>
                    <UpdateFood></UpdateFood>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:4000/myItems/update/${params.id}`)
            },
            {
                path: '/foodDetails',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
              //loader: ({params}) => fetch(`http://localhost:4000/products/productDetails/single/${params.id}`)
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
            {
                path: '/food-detail/:id',
                element: <PrivateRoute>
                    <FoodDetailCard></FoodDetailCard>,
                </PrivateRoute>,
              //  loader: () => fetch('http://localhost:4000/FoodItems/food-detail/:')
              loader: ({params}) => fetch(`http://localhost:4000/food-detail/${params.id}`)
            },
           
            {
                path: '/myItems',
                element: <MyaddedItems></MyaddedItems>,
                loader: () => fetch('http://localhost:4000/myItems')
            
            },
           



        ]
    }
]);

export default routes;