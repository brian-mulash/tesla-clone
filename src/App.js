import React from 'react';
import './scss/app.scss'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import {Header} from './components'
import {Landing} from './routes'

const Layout = () => {
  return (
    <div className='display'>
      <Header />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Landing />
        }
      ]
    }
  ]
)


function App() {
  return (
    <div className="App">
      <RouterProvider router = { router }/>
    </div>
  );
}

export default App;
