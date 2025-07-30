import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // O BrowserRouter deve estar aqui
import './styles.css'
import reportWebVitals from './reportWebVitals.ts'
import App from './App.tsx'
import { FavoritosProvider } from './context/FavoritosContext.tsx'
import { HortaProvider } from './context/HortaContext.tsx'

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <BrowserRouter>
        <FavoritosProvider>
          <HortaProvider>
            <App />
          </HortaProvider>
        </FavoritosProvider>
      </BrowserRouter>  {/* O Router envolve a aplicação aqui */}
    </StrictMode>,
  )
}

reportWebVitals()
