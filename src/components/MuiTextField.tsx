import { Box, Paper, TextField, Autocomplete, Select, MenuItem, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function MuiTextField() {
  const last3Actions = ['save', 'delete', 'buy']
  const [countries, setCountries] = useState(['US']);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === 'string' ? value.split(', ') : value);
    console.log(countries);
  }

  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return(
    <Box sx={{ p: 4 , m: 4, width: "80vw"}}>
      <Paper component={'form'} elevation={3}>
        <FormControl sx={{ m: 2 }}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="password"
            
          />
        </FormControl>
        <TextField label="Password"
            helperText="Minimum of 8 characters"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            sx={{ mt: 2 }}
          />
        <TextField label="Email" type="email" error helperText={"Must enter a valid email"} sx={{ m: 2 }} />
        <TextField label="Nothing" sx={{ m: 2 }} />
        <Autocomplete
          options={last3Actions}
          sx={{ p: 2, width: "270px" }}
          renderInput={(params) => <TextField {...params} label="Action" /> }
          />
        <Select value={countries} 
          onChange={handleChange}
          sx={{ mx: 2, mb: 2 }}>
          <MenuItem value='US'>USA</MenuItem>
          <MenuItem value='CA'>Canada</MenuItem>
          <MenuItem value='MX'>Mexico</MenuItem>
        </Select>
        <TextField
          
          label='Select multiple countries'
          select
          SelectProps={{ multiple: true, }}
          value={countries}
          onChange={handleChange}
          sx={{ width: "40%", mx: 2, mb: 2 }}
        >
          <MenuItem value='US'>USA</MenuItem>
          <MenuItem value='MX'>Mexico</MenuItem>
          <MenuItem value='CA'>Canada</MenuItem>
        </TextField>
      </Paper>
    </Box>
  );
};

export default MuiTextField;