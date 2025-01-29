import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import HelpCenter from './Pages/HelpCenter'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path= {"/"} exactly={true} element={<Home />}/>
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/order-tracking" element={<HelpCenter />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
