import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Jobs from './pages/Jobs';
import Sources from './pages/Sources';
import Destination from './pages/Destination';
import Update from './pages/Update';

function App() {
  return (
    <>
        <Router>
          <SideBar>
                    <Routes>
                        <Route path='/Jobs' element={<Jobs/>} />
                        <Route path='/Sources' element={<Sources/>} />
                        <Route path='/Destination' element={<Destination/>} />
                        <Route path='/Update' element={<Update />} />
                    </Routes>
                    </SideBar>

            </Router>
            </>
  );
}
export default App;