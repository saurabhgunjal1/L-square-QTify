import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { StyledEngineProvider } from '@mui/material/styles';
import Landingpage from './pages/landingpage';
function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
<Landingpage/>
</StyledEngineProvider>
</>
  );
}

export default App;
