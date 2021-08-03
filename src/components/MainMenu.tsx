import { useHistory } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from 'src/store/rootSelector';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const MainMenu = () => {
  const cart = useSelector(cartSelector);
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: 'black',
      boxShadow: '0 0 0 1px #263238',
      height: '150px',
    },
    toolbar: {
      height: '100%',
    },
    container: {
      height: '100%',
    },
    imgGrid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnGrid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'end',
      paddingBottom: `${theme.spacing(3)}px !important`,
      gap: '75px',

    },
    btns: {
      color: theme.palette.primary.contrastText,
      fontWeight: 700,
      textTransform: 'none',
      fontSize: '1.5rem',
      borderRadius: '25px',
    },
    cartBtn: {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      borderRadius: '25px',
      fontWeight: 700,
      textTransform: 'none',
      fontSize: '1.5rem',
      verticalAlign: 'middle',
      '&:hover': {
        borderColor: theme.palette.secondary.dark,
      },
      position: 'relative',
      '&:before': {
        content: `'${cart?.length > 0 ? cart.length : ''}'`,
        verticalAlign: 'inherit',
        position: 'absolute',
        color: 'white',
        fontSize: '15px',
        height: '30px',
        width: '30px',
        border: `1px solid ${cart?.length > 0 ? 'red' : 'transparent'}`,
        background: `${cart?.length > 0 ? 'red' : 'none'}`,
        borderRadius: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: -15,
        top: -15,
        zIndex: 1,
      },
    },
    cartIcon: {
      fontSize: '1.75rem',
      paddingBottom: '10px',
    },
  }));

  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid className={classes.container} container spacing={2}>
          <Grid className={classes.imgGrid} item xs={2} sm={6}>
            <img src="img/Logo.jpg" alt="Logo" width="125px" />
          </Grid>
          <Grid className={classes.btnGrid} item xs={10} sm={6}>
            <Button
              className={classes.btns}
              size='large'
              color='primary'
              variant="text"
              onClick={() => history.push('/')}
            >
              Home
            </Button>
            <Button
              className={classes.btns}
              size='large'
              color='primary'
              variant="text"
              onClick={() => history.push('/')}
            >
              Browse
            </Button>
            <Button
              className={classes.cartBtn}
              size='large'
              color='primary'
              variant="outlined"
              onClick={() => history.push('/cart')}
            >
              <ShoppingCartIcon className={classes.cartIcon} />
              Cart
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MainMenu
