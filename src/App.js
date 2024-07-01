import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Calling from './pages/Calling';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/calling" element={<Calling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
