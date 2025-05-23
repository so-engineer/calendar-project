import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import "./styles/output.css"
import "./styles/destyle.css"
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { LoginUserProvider } from './contexts/LoginUserContext'
import Modal from 'react-modal';

// アプリケーションのルート要素を設定
Modal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginUserProvider>
      <RouterProvider router={router} />
    </LoginUserProvider>
  </StrictMode>,
)
