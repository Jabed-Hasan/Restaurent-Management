
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
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
import Purchase from "../pages/FoodDetails/Purchase";

import MyOrderedItems from "../pages/MyOrderdItems/MyOrderedItems";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/FoodItems')

                
            },

           
            
            {
                path: '/AddFood',
                element: <PrivateRoute>
                    <AddFoodItem></AddFoodItem>
                </PrivateRoute>,
                 
              
            },
            {
                path: '/Carts',
                element: <PrivateRoute>
                    <MyOrderedItems></MyOrderedItems>
                </PrivateRoute>,
                 loader:() => fetch('https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/Carts',{credentials:'include'}),
              
            },
          
            {
                path: 'myItems/update/:id',
                element: <PrivateRoute>
                    <UpdateFood></UpdateFood>
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/myItems/update/${params.id}`)
            },
            {
                path: '/foodDetails',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
              //loader: ({params}) => fetch(`https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/products/productDetails/single/${params.id}`)
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
                loader: () => fetch('https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/FoodItems')

            
            },
        
            {
                path: '/food-detail/:id',
                element: <PrivateRoute>
                    <FoodDetailCard></FoodDetailCard>,
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/food-detail/${params.id}`)
              //  loader: () => fetch('https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/FoodItems/food-detail/:')
              
            },
            {
                path: '/food-detail/purchase/:id',
                element: <Purchase></Purchase>,
                loader: ({params}) => fetch(`https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/food-detail/purchase/${params.id}`)
            },
          
           
            {
                path: '/myItems',
                element: <MyaddedItems></MyaddedItems>,
                loader: () => fetch('https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/myItems')
            
            },
           



        ]
    }
]);

export default routes;