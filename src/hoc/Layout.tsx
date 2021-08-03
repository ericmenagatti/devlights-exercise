import MainMenu from 'src/components/MainMenu';
import Footer from 'src/components/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'black',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

const Layout = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MainMenu />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
