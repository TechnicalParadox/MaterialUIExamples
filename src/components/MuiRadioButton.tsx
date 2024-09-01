import React, { useState } from 'react';
import { Box, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Checkbox, FormGroup } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Book } from '@mui/icons-material';

function MuiRadioButton() {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(event.target.value);
  }

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(event.target.checked);
    console.log("hello")
  }

  const [skills, setSkills] = useState<string[]>([]);
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if (index === - 1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  }
  console.log(skills);

  return(
    <Box display="flex" flexDirection={"column"} sx={{ p: 2 }}>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup name="job-experience-group" aria-labelledby="job-experience-group-label" value={value} onChange={handleChange} row>
          <FormControlLabel control={<Radio color="error" />} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio color="warning"/>} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio color="success"/>} label='6-10' value='6-10' />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience (Required)
        </FormLabel>
        <RadioGroup name="job-experience-group" aria-labelledby="job-experience-group-label" value={value} onChange={handleChange}>
          <FormControlLabel control={<Radio color="error" />} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio color="warning"/>} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio color="success"/>} label='6-10' value='6-10' />
        </RadioGroup>
      </FormControl>
      <Box>
        <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={termsAccepted} onChange={handleTermsChange} />} />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={termsAccepted} onChange={handleTermsChange} />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel label="HTML" control={<Checkbox value="html" checked={skills.includes('html')} onChange={handleSkillChange}/>} />
            <FormControlLabel label="Javascript" control={<Checkbox value="js" checked={skills.includes('js')} onChange={handleSkillChange} />} />
            <FormControlLabel label="CSS" control={<Checkbox value="css" checked={skills.includes('css')} onChange={handleSkillChange} />} />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiRadioButton;