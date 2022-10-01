// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Map } from './pages/map/map';

// https://taylor.callsen.me/using-openlayers-with-react-functional-components/
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;
