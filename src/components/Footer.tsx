import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(6, 2),
    marginTop: 'auto',
    backgroundColor: '#1A1A1A',
  },
  text: {
    color: '#FFF'
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
    justifyContent: 'start',
    alignItems: 'center',
    paddingBottom: `${theme.spacing(3)}px !important`,

  },
  btns: {
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    textTransform: 'none',
    fontSize: '0.85rem',
    borderRadius: '25px',
  },
  divider: {
    backgroundColor: theme.palette.primary.contrastText,
    width: '2px',
    height: '20%',
    display: 'flex',
    alignSelf: 'center',
    marginBottom: '5px',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        <Grid className={classes.container} container spacing={2}>
          <Grid className={classes.imgGrid} item xs={4}>
            <img src="img/LogoGray.jpg" alt="Logo" width="125px" />
          </Grid>
          <Grid className={classes.btnGrid} item xs={8}>
            <Button
              className={classes.btns}
              size='large'
              color='primary'
              variant="text"
            >
              Acerca de Valve
            </Button>
            <Divider className={classes.divider} flexItem orientation="vertical" variant="middle" />
            <Button
              className={classes.btns}
              size='large'
              color='primary'
              variant="text"
            >
              Steamworks
            </Button>
            <Divider className={classes.divider} flexItem orientation="vertical" variant="middle" />
            <Button
              className={classes.btns}
              size='large'
              color='primary'
              variant="text"
            >
              Empleo
            </Button>
            <Divider className={classes.divider} flexItem orientation="vertical" variant="middle" />
            <Button
              className={classes.btns}
              size='large'
              color='primary'
              variant="text"
            >
              Distribucíon de Steam
            </Button>
            <Divider className={classes.divider} flexItem orientation="vertical" variant="middle" />
            <Button
              className={classes.btns}
              size='large'
              color='primary'
              variant="text"
            >
              Tarjetas de Regalo
            </Button>
            <Divider className={classes.divider} flexItem orientation="vertical" variant="middle" />
            <Button
              className={classes.btns}
              size='large'
              color='primary'
              variant="text"
            >
              Steam
            </Button>
            <Divider className={classes.divider} flexItem orientation="vertical" variant="middle" /><Button
              className={classes.btns}
              size='large'
              color='primary'
              variant="text"
            >
              @steam
            </Button>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
