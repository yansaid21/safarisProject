import { Link } from "react-router-dom";
import BasicButton from "../components/BasicButton";
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useContext } from 'react';
import { waiterContext } from '../context/waiterContext';

// Definición del array de meseros
const waiters = [
  "Sara Millan",
  "Joseph David Maheha",
  "Jean Said Arias Marin",
  "Ana Maria Gomez",
  "Maryury Dayana Pulgar",
  "Tatiana Núñez",
  "Yulieth Córdoba Cabal",
  "Elkin Paz",
  "Luis Lopez",
  "Zcharik García"
];
export default function LandingPage() {
    const {theWaiter,setTheWaiter}=useContext(waiterContext)
    const [selectedWaiter, setSelectedWaiter] = React.useState("");

    // Función para manejar el cambio de selección
    const handleChange = (event, newValue) => {
      setSelectedWaiter(newValue);
    };
    
  return (
    <div>
      <h1>Seleccione su nombre</h1>
      
      <Autocomplete
        disablePortal
        options={waiters}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Nombre" />}
        onChange={handleChange}
        value={selectedWaiter}
      />
    <h1>{selectedWaiter}</h1>

      <Link onClick={()=> setTheWaiter(selectedWaiter)} to='/waiter'>
        <BasicButton  />
      </Link>
      {theWaiter}
    </div>
  );
}
