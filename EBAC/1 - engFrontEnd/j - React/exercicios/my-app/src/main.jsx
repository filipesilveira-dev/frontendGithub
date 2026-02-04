import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// vesrão "limpa"
createRoot(document.getElementById('root')).render(<App />)

//versão "suja"
// const root = document.getElementById('root');
//
// createRoot(root).render(<App />)
