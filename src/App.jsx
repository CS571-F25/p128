import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Guides from './components/Guides'

function App() {
  return <HashRouter>
    <Routes>
      <Route path = "/" element={<Home></Home>}></Route>
      <Route path = "/guides" element={<Guides></Guides>}></Route>
    </Routes>
  </HashRouter>
}

export default App
