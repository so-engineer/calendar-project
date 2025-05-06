import { createBrowserRouter } from 'react-router-dom'
import { ToPage } from './components/pages/ToPage'
import { LoginPage } from './components/pages/LoginPage'
import { NotLoginLayout } from './components/templates/NotLoginLayout'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NotLoginLayout />,
    children: [
      {index: true, element: <ToPage />},
      {path: "/login", element: <LoginPage />},
    ]
  }
])
