import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Guides from './components/Guides'
import BaitboxLayout from './components/BaitboxLayout'

function App() {
  return (<HashRouter>
    <Routes>
      <Route path = "/" element={<BaitboxLayout/>}>
            <Route index element={<Home />} />
            <Route path = "/guides" element={<Guides/>}></Route>
      </Route>

    </Routes>
  </HashRouter>)
}

export default App
