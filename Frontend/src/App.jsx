import { Route, Routes } from 'react-router-dom';
import Home from "./Commponent/Home";
import AuthLogin from './Pages/AuthPages/AuthLogin';
import AuthRegister from "./Pages/AuthPages/AuthRegister";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AuthLogin" element={<AuthLogin />} />
        <Route path="/AuthRegister" element={<AuthRegister />} />
        {/* <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} /> */}
      </Routes>
    </>
  )
}

export default App
