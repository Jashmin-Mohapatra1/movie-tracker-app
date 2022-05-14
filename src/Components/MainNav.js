import React, { useEffect } from "react";
import Box from '@mui/material/Box';
//import { makeStyles } from "@mui/material/makeStyles";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

import { useHistory } from 'react-router-dom';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);


  return (

    <Box sx={{ width: 500 }}>
      <BottomNavigation
        style={{
          backgroundColor: "rgb(98, 54, 193)",
          width: "100%",
          height: "50px",
          position: "fixed",
          bottom: 0,
          zIndex: 100,
        }}
        showLabels

        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

      >
          
        <BottomNavigationAction 
          style={{ color: "white", backgroundColor: "rgb(98, 54, 193)" }}
          label="Trending"
          icon={<WhatshotIcon />}
        /> 

         <BottomNavigationAction
          style={{ color: "white", backgroundColor: "rgb(98, 54, 193)" }}
          label="Movies"
          icon={<MovieIcon />}
        />

          <BottomNavigationAction
          style={{ color: "white", backgroundColor: "rgb(98, 54, 193)" }}
          label="Series"
          icon={<TvIcon />}
           />

        <BottomNavigationAction
          style={{ color: "white", backgroundColor: "rgb(98, 54, 193)" }}
          label="Search"
          icon={<SearchIcon />}
           />

      </BottomNavigation>

    </Box>
  );
}
