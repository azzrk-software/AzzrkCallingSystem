import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Calling from './pages/Calling';

function App() {
  // const user = getUserFromLocalStorage();
  // const [isLoaded, setIsLoaded] = useState(true);
  // window.addEventListener('load', () => setIsLoaded(false));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/calling" element={<Calling />} />

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
