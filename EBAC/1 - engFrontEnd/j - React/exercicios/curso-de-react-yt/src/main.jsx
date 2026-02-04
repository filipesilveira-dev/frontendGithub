import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import TaskPage from './pages/TaskPage.jsx'

// Abaixo trata-se de uma lista de objeto, contendo informação do caminho e do elemento a ser renderizado
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/task",
    element: <TaskPage />
  }
])

// criar aplicação reacr, renderizar a aplicação react dentro da <div> com id=root que se encontra no index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 
    
    - o App (componente que se encontra em './App.jsx') que está sendo renderizado 
    - primeira letra sempre maiúscula do componente (assim fica diferenciado o que é componente e o que é uma tag html)
    
    */}

    {/* preenchido seguido documentação do site "React Router*/}
    <RouterProvider router={router} />
    {/* com o uso das ferramentas importadas do router-provider-dom o <App /> não foi mais usado aqui. Foi colocado em "element" mais acima */}
    {/* <App /> */}
  </StrictMode>,
)
