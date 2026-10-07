import { Route, Routes } from 'react-router-dom'
import Vocab from './pages/Vocab'
import Card from './components/Card'
import CardStack from './components/CardStack'

const App = () => {


  return (
    <div  className='bg-black'>
      <Routes>
        <Route path='/Vocab' element={<Vocab/>} />
      </Routes>
    </div>
  )
}

export default App
