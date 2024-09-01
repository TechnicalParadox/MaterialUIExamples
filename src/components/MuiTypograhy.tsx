import { Typography, Box } from "@mui/material"
import Grid from '@mui/material/Grid2'

function MuiTypography() {
  return <Grid container justifyContent={"space-between"} alignItems={"center"} sx={{ p: 2 }}>
    <Box>
      <Typography variant='h1' gutterBottom>h1. Heading</Typography>
      <Typography variant='h2' gutterBottom>h2. Heading</Typography>
      <Typography variant='h3' gutterBottom>h3. Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>h4. size but I'm actuallyl the head of the page!</Typography>
      <Typography variant='h5' gutterBottom>h5. Heading</Typography>
      <Typography variant='h6' gutterBottom>h6. Heading</Typography>
    </Box>
    <Box>
      <Typography variant='subtitle1' gutterBottom>Sub title 1</Typography>
      <Typography variant='subtitle2' gutterBottom>Sub title 2</Typography>
      <Typography variant='body1' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quidem?</Typography>
      <Typography variant='body2' gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem?</Typography>
      <Typography variant='body1' color="text.secondary" gutterBottom>This text is secondary color.</Typography>
      <Typography variant='body1' color="text.disabled" gutterBottom>This text is disabled color.</Typography>
    </Box>
  </Grid>
}

export default MuiTypography