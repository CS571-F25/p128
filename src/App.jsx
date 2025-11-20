import { HashRouter, Route, Routes } from 'react-router'
import './App.css'

import Home from './components/Home'
import Guides from './components/Guides'
import BaitboxLayout from './components/BaitboxLayout'
import LicensesAndRules from './components/LicensesAndRules'
import Bookmarks from './components/Bookmarks'
import ProgressTracker from './components/ProgressTracker'
import Tournaments from './components/Tournaments'
import GuideDetail from './components/Guides/GuideDetail'

function App() {
  return (<HashRouter>
    <Routes>
      <Route path = "/" element={<BaitboxLayout/>}>
            <Route index element={<Home />} />
            <Route path = "/guides" element={<Guides/>}></Route>
            <Route path="guides/:guideId" element={<GuideDetail />} />
            <Route path = "/LicensesAndRules" element={<LicensesAndRules/>}></Route>
            <Route path = "/Bookmarks" element={<Bookmarks/>}></Route>
            <Route path = "/ProgressTracker" element={<ProgressTracker/>}></Route>
            <Route path = "/Tournaments" element={<Tournaments/>}></Route>
      </Route>

    </Routes>
  </HashRouter>)
}

export default App
