import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accompany from "./pages/accompany/Accompany"
import Main from './pages/main/Main'
import Navbar from './setup/routes-manager/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path='/accompany/' element={<Accompany />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
