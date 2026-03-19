import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Board from './Board.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Board />
  </StrictMode>,
)
