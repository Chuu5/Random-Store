import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rendering from './rendering'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Rendering />
  </BrowserRouter>
)
