import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/LayOut/Main';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetaile from './Components/ServiceDetail/ServiceDetaile';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Reviews from './Components/Reviews/Reviews';
import AboutUs from './Components/AboutUs/AboutUs';
import AddService from './Components/AddService/AddService';
import MyReviews from './Components/MyReviews/MyReviews';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('https://care-vibe-server.vercel.app/servicesThree')
        },
        {
          path:'/services',
          element:<Services></Services>,
          loader:()=>fetch('https://care-vibe-server.vercel.app/services')
        },
        {
          path:'/services/:id',
          element:<PrivateRoute><ServiceDetaile></ServiceDetaile></PrivateRoute>,
          loader:({params})=>fetch(`https://care-vibe-server.vercel.app/services/${params.id}`)
        },
        {
          path:'/reviews',
          element:<Reviews></Reviews>,
          loader:()=>fetch('https://care-vibe-server.vercel.app/reviews')
        },
        {
          path:'/signUp',
          element:<SignUp/>
        },
        {
          path:'/login',
          element:<Login/>
        }
        ,
        {
          path:'/aboutUs',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/addService',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path:'/myReviews',
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
