import { Button, CssBaseline, Typography } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from './ColorModeContext';

function App() {

  const  { toggleColorMode } = useContext(ColorModeContext);

  return (
    <>
      <CssBaseline />
      <Typography variant="h1" gutterBottom>Hello!</Typography>
      <Button onClick={toggleColorMode} color="secondary" variant="contained">Click me</Button>
    </>
  )
}

export default App