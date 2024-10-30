import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import Signup from './Signup.tsx'
import Home from './Home.tsx'

import './Main.css'
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />}/>
      <Route path="Signup" element={<Signup />}/>
      <Route path="Home" element={<Home />}/>
      <Route path="*" element={<App />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />

)
