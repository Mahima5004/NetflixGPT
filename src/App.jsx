import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'
import Body from "./components/Body"

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          index: true,
          element: <Login />
        },
        {
          path: "browse",
          element: <Browse />
        }
      ]
    }
  ])

  return (
     <RouterProvider router={router}/>
  )
}

export default App
