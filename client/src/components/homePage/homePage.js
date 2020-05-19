import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from '../../images/authPageImg.jpg'

import colorPalette from '../../theme/colorPalette'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
      },
      loginContainer:{
         backgroundColor:'white'
      },
      loginDetails:{
          padding:24
      },
      imageContent:{
          backgroundImage:`url(${img})`,
          minHeight:'100%',
          backgroundSize:'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor:colorPalette.primaryColors.black


      }
  }));

export const HomeComponent = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
          <h1>{'Tadaaaa!..... Welcome :)'}</h1>
      
    </div>
  );
}