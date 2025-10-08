import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body'
import Login from "./components/Login"

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/home",
          index: true,
          element: <Body />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
