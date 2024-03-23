import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { StyledEngineProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Landingpage from './pages/landingpage';
import { useEffect, useState } from 'react';
import { fetchNewalbums, fetchTopalbums, fetchsongs } from './api/api';


function App() {
  const [data,setData]= useState({});
const generateData = (key, sources)=>{
  sources().then((data)=>{
  setData((prevState) =>{
    return {...prevState,[key]: data};
  });
  });
};

useEffect(()=>{
  generateData("topAlbums",fetchTopalbums);
  generateData("newAlbums",fetchNewalbums);
  generateData("songs",fetchsongs);
},[]);

const {topAlbums=[], newAlbums=[], songs=[]}= data;


  return (
    <>
    <StyledEngineProvider injectFirst>
    <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
</StyledEngineProvider>
</>
  );
}

export default App;
