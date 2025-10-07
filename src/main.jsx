import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FirebaseAppContextProvider } from './firebaseConfig'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAppContextProvider>
      <App />
    </FirebaseAppContextProvider>
  </StrictMode>,
)
