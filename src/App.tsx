import { Button, CssBaseline, Divider, Typography, Paper } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from './ColorModeContext';
import MuiTypography from './components/MuiTypograhy';
import MuiButton from './components/MuiButton';
import MuiTextField from './components/MuiTextField';
import MuiRadioButton from './components/MuiRadioButton';

function App() {

  const  { toggleColorMode } = useContext(ColorModeContext);

  return (
    <>
      <CssBaseline />
      <Typography variant="h1" gutterBottom>Hello!</Typography>
      <Button onClick={toggleColorMode} color="secondary" variant="contained">Toggle D/N mode</Button>
      <Divider/>
      <MuiTypography />
      <Divider />
      <Paper sx={{m: 4, p: 1}} elevation={5}>
        <MuiButton/>
      </Paper>
      <Divider/>
      <MuiTextField/>
      <Divider />
      <MuiRadioButton/>
    </>
  )
}

export default App