import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import img from '../../images/authPageImg.jpg'

import colorPalette from '../../theme/colorPalette'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        '& .MuiLink-underlineHover':{
            textDecoration:'none'
        }
      },
      loginContainer:{
         backgroundColor:'white'
      },
      loginDetails:{
          padding:24,
          display:'grid',
          paddingTop: '50%'
      },
      imageContent:{
          backgroundImage:`url(${img})`,
          minHeight:'100%',
          backgroundSize:'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor:colorPalette.primaryColors.black


      },
      googleLogin:{
        width: 151,
        height: 42,
        backgroundColor: colorPalette.primaryColors.googleBlue,
        borderRadius: 2,
        boxShadow: '0 3px 4px 0 rgba(0,0,0,.25)',
        padding: 10,
        textDecoration: 'none',
        color:colorPalette.primaryColors.white,
        fontWeight:'bold',
        textAlign:'center',
        marginLeft: 'auto',
    marginRight: 'auto',
      },
      loginInfo:{
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      message:{
        marginTop: 472,
    fontSize: 65,
    fontWeight: 600,
    textAlign: 'center',
    background: '-webkit-linear-gradient(#2eec22, #5606f1)',
    //webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
    '-webkit-background-clip': 'text',
	'-webkit-text-fill-color': 'transparent'
      }
  }));

export const LoginComponent = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
          <Grid container>
          <Grid item xs={4} className={classes.loginContainer}>
              <div className={classes.loginDetails}>
              
             <h1 className={classes.loginInfo}> {'Login to your account'}</h1>

              <Link href='/auth/google' className={classes.googleLogin}>
              {'Login With Google'}
              </Link>
              </div>
          
          </Grid>
          <Grid item xs={8} className={classes.imageContent} >
              <div className={classes.message}>
              {'Welcome to SKR Portfolio'}
              </div>
              
          </Grid>

          </Grid>
      
    </div>
  );
}