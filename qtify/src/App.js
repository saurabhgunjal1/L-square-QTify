import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { StyledEngineProvider } from '@mui/material/styles';
function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
<Navbar/>
</StyledEngineProvider>
</>
  );
}

export default App;
