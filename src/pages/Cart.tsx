import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from 'src/store/rootSelector';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Item from 'src/containers/Item';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';
import { ISale } from 'src/types/sales';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '150px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  cartContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  cartGrid: {
    display: 'flex',
  },
  text: {
    color: theme.palette.primary.contrastText,
  },
}));

const Cart = () => {
  const classes = useStyles();
  const sales = useSelector(cartSelector);
  const [results, setResults] = useState<ISale[]>([]);

  useEffect(() => {
    setResults(sales);
  }, [sales])

  const total = results?.reduce((total: number, current: ISale) => {
    return total + +current.salePrice;
  }, 0);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid className={classes.container} container spacing={1} xs={12}>
        <Grid className={classes.cartContainer} container item spacing={3} xs={12} sm={6} md={7}>
          {results?.length > 0 ? results?.map((item: ISale) => {
            return (
              <Grid key={item.gameID} item xs={12} sm={6} md={4}>
                <Item
                  item={item}
                  showPrice={false}
                  showStars={false}
                  shorterTitle={true}
                  shorterHeight={true}
                />
              </Grid>
            );
          }) : null}
        </Grid>
        <Grid className={classes.listContainer} container item spacing={3} xs={12} sm={5} md={4}>
          <div>
            <Typography className={classes.text} variant="h6">
              Cart List
            </Typography>
            <List>
              {results?.map((item: ISale) => {
                return (
                  <ListItem key={item.gameID}>
                    <ListItemText
                      className={classes.text}
                      primary={item.title}
                    />
                    <ListItemSecondaryAction>
                      <Typography className={classes.text} variant="h6">
                        ${item.salePrice}
                      </Typography>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })}
              <Divider />
              <ListItem>
                <ListItemText
                  className={classes.text}
                  primary="Total : "
                />
                <ListItemSecondaryAction>
                  <Typography className={classes.text} variant="h6">
                    {`$${total}`}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
