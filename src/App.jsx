import React from 'react'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import { apiKey } from './constants'
import Home from './pages/Home'
import Root from './pages/Root'
import SingleMovieDetail from './pages/SingleMovieDetail'
import Error from './pages/Error'
import { loader as MovieLoader} from './pages/Home'
import { loader as SingleMovieLoader } from './pages/SingleMovieDetail'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<Error/>}>
      <Route index loader={MovieLoader} element={<Home/>} errorElement={<Error/>
      }/>
      <Route path="/detail/:imdbID" element={<SingleMovieDetail/>} loader={SingleMovieLoader}/>

    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App