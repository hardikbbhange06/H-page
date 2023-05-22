import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      
      <ButtonGroup  aria-label="text button group">
      <div>
        <Button variant="text" color="warning" className='Call'>Call 0876-123-4567</Button>
        </div>
        <br />
                <br />&nbsp;
        <div>
        <Button  variant="contained" className='Call' color="warning">Log In / Sign Up</Button>
        </div>
      </ButtonGroup>
    </Box>
  );
}