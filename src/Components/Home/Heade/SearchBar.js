import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  
  // backgroundColor: '#ffcdd2',
  '&:hover': {
    // backgroundColor: '#ffcdd2',
  },
//   marginRight: theme.spacing(2),
  // marginLeft: 0,
  
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    marginLeft: theme.spacing(3),
    // width: 'auto',
    
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  borderRadius:'50px',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  
  '& .MuiInputBase-input': {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    
    [theme.breakpoints.up('md')]: {
      width: '70ch',
      borderRadius:'50%',
      
    },
  },
}));

export default function SearchBar() {



 

  return (
    <Box component="form" noValidate sx={{ p: 1, my: 0,
     
 }}>
      <AppBar position="static"  style={{backgroundColor:"#e7e0e0", color: "black" , borderRadius:'50px',}}>
        <Toolbar  >
          
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          
          
        </Toolbar>
      </AppBar>
   
    </Box>
  );
}