import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { GlobalStyleDefault } from './styles/global.ts'
import { Provider } from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <GlobalStyleDefault />
        <App />
        <ToastContainer className={'myToast'} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
