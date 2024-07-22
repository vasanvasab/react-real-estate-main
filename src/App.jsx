import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Error, Home, ItemsPage, Landing, SingleItem } from './pages';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
      },
      {
        path:'items',
        element:<ItemsPage/>,
      },
      {
        path:'items/:id',
        element:<SingleItem/>
      },{
        path:'about',
        element:<About/>
      }
    ]

  }
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App