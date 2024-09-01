import { Button, Stack, Box, IconButton, Typography, useMediaQuery, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useState } from 'react';


function MuiButton() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'))
  const [lastAction, setLastAction ] = useState("nothing");
  const [tools, setTools] = useState<string[]>([])

  const whatOnchangeDoes = (_event: React.MouseEvent<HTMLElement>, updatedTools: string[]) => {
    setTools(updatedTools);
  }

  return(
    <Box  display="flex" flexDirection={"column"} justifyContent={"center"} mt={2}>
      <Stack direction={isMediumScreen ? "row" : "column"} gap={2} >
        <Stack gap={2}>
          <ButtonGroup variant="outlined" size="large" color="#ffffff">
            <Button>Outlined Text</Button> 
            <Button color="primary" variant="contained">Colored Outlined</Button>
            <Button>Outlined Text 2</Button>
          </ButtonGroup>
        </Stack>
        <Stack gap={2}>
          <Button variant="text" color="secondary">Secondary Text</Button> 
          <Button variant="outlined" color="secondary">Secondary Outlined</Button>
          <Button variant="contained" color="secondary">Secondary Contained</Button> 
        </Stack>
        <Stack gap={2}>
          <Button variant="text" size="small" color="error">Small Error Text</Button> 
          <Button variant="outlined" size="medium" color="warning">Medium Warning Outlined</Button>
          <Button variant="contained" size="large" color="success">Large Success Contained</Button>
          <Button variant="contained" size="medium" color="info">Large Info Contained</Button>
        </Stack>
        <Stack gap={2}>
          <IconButton>
            <SendIcon />
          </IconButton>
          <Typography>Send</Typography>
          <IconButton>
            <SendIcon color="primary" />
          </IconButton>
          <IconButton>
            <SendIcon color="secondary" />
          </IconButton>
        </Stack>
      </Stack>
      <Box display={"flex"}>
        <ToggleButtonGroup onChange={(_e, u) => {setTools(u);} } value={tools}>
          <ToggleButton value="send" sx={{ color: "primary.main" }}>
            <SendIcon/>
          </ToggleButton>
          <ToggleButton value="archive">
            <ArchiveIcon/>
          </ToggleButton>
          <ToggleButton value="delete" sx={{ color: "secondary.main" }}>
            <DeleteIcon/>
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ ml: 2 }}>Selected: {tools.map((tool) => { return tool + ", "; })}</Typography>
      </Box>
    </Box>
  );
};

export default MuiButton;