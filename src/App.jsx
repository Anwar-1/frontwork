import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from'./pages/Home'

function App() {
 

  return (
    <>
     <BrowserRouter>
    
     <Navbar/>
     <div className='pages'>
     <Routes>
      <Route path="/"   element={<Home/>}    />
     </Routes>
     </div>

     </BrowserRouter>
    </>
  )
}

export default App
