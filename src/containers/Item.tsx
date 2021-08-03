import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from 'src/store/rootSelector';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import yellow from '@material-ui/core/colors/yellow';
import { ISale } from 'src/types/sales';
import * as actions from 'src/store/actions/index';

interface IItem {
  item: ISale;
  showStars?: boolean;
  showPrice?: boolean;
  shorterTitle?: boolean;
  shorterHeight?: boolean;
}

const Item: FC<IItem> = ({
  item,
  showStars = true,
  showPrice = true,
  shorterTitle = false,
  shorterHeight = false,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      height: `${shorterHeight ? 'clamp(150px, 250px, 400px)' : 'clamp(300px, 400px, 500px)'}`,
      background: 'black',
      padding: '30px',
      verticalAlign: 'middle',
      '&:hover': {
        border: '1px solid #DB0F64',
        borderRadius: '10px',
      },
      position: 'relative',
      '&:hover:before': {
        content: `'${Math.ceil(+item.savings)}%'`,
        verticalAlign: 'inherit',
        position: 'absolute',
        color: 'white',
        fontSize: '15px',
        height: '60px',
        width: '60px',
        border: '1px solid red',
        background: 'red',
        borderRadius: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: 15,
        top: 15,
        zIndex: 1,
      },
    },
    media: {
      height: 140,
    },
    buyBtnBox: {
      display: 'flex',
      justifyContent: 'center',
      '& > button': {
        background: 'linear-gradient(to right, rgb(255, 169, 0) 0%, rgb(208, 0, 83) 49%, rgb(146, 0, 142) 97%)',
      },
    },
    subtitleGrid: {
      display: "flex",
      justifyContent: "center",
    },
    title: {
      color: theme.palette.primary.contrastText,
    },
    subtitle: {
      color: theme.palette.primary.contrastText,
      fontWeight: 500,
    },
    normalPrice: {
      textDecorationLine: 'line-through'
    },
    salePrice: {
      fontSize: '30px',
      paddingLeft: theme.spacing(1),
    },
    starsGrid: {
      display: 'flex',
      justifyContent: 'center',
      '& > svg': {
        color: yellow[500],
        height: '35px',
        width: '35px',
      },
    },
  }));

  const classes = useStyles();
  const dispatch = useDispatch();
  const carts = useSelector(cartSelector);
  const stars = Math.ceil(+item.steamRatingPercent / 25);

  const addToCart = useCallback(() => dispatch(actions.addToCart(item)), [dispatch, item])

  const checkCart = useCallback(() => {
    const results = carts?.filter((cartItem) => cartItem.gameID === item.gameID);
    if (results.length > 0) {
      console.log(results);
      console.log(item.gameID);
      dispatch(actions.removeCart(item.gameID.toString()));
      return;
    } else {
      addToCart();
      return;
    };
  }, [dispatch, addToCart, carts, item.gameID]);

  return (
    <Card className={classes.root} onClick={checkCart}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.thumb}
          title={item.title}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography className={classes.title} variant="h5" component="h2">
                {shorterTitle ? item.title.toString().slice(0, 10) : item.title}
              </Typography>
            </Grid>
            {showStars ?
              <>
                <Grid className={classes.subtitleGrid} item xs={12}>
                  <Typography className={classes.subtitle} variant="h5" component="h2">
                    Steam Review
                  </Typography>
                </Grid>
                <Grid className={classes.starsGrid} item xs={12}>
                  {stars > 0 ? <StarIcon /> : <StarOutlineIcon />}
                  {stars > 1 ? <StarIcon /> : <StarOutlineIcon />}
                  {stars > 2 ? <StarIcon /> : <StarOutlineIcon />}
                  {stars > 3 ? <StarIcon /> : <StarOutlineIcon />}
                  {stars > 4 ? <StarIcon /> : <StarOutlineIcon />}
                  {stars === 5 || +item.steamRatingPercent === 100 ? <StarIcon /> : <StarOutlineIcon />}
                </Grid>
              </>
              : null}
          </Grid>
        </CardContent>
      </CardActionArea>
      {showPrice ?
        <CardActions className={classes.buyBtnBox}>
          <Button size="large" variant="contained" color="primary">
            <Typography className={classes.normalPrice}>${item.normalPrice}</Typography> <Typography className={classes.salePrice}>${item.salePrice}</Typography>
          </Button>
        </CardActions>
        : null}
    </Card>
  );
};

export default Item
