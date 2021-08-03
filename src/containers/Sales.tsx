import { FC, useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { salesSelector, isSalesLoadingSelector } from 'src/store/rootSelector';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Item from 'src/containers/Item';
import { makeStyles } from '@material-ui/core/styles';
import { ISale } from 'src/types/sales';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: theme.spacing(10),
  },
}));

interface ISales {
  query: string;
};

const Sales: FC<ISales> = ({ query }) => {
  const classes = useStyles();
  const sales = useSelector(salesSelector);
  const loading = useSelector(isSalesLoadingSelector);
  const [results, setResults] = useState([]);

  const filterSales = useCallback(() => {
    const filterList = sales?.filter((item: ISale) => (item.title.toLowerCase().indexOf(query.toLowerCase())) >= 0);
    setResults(filterList);
  }, [query, sales]);

  useEffect(() => {
    filterSales();
  }, [filterSales]);

  if (loading) return null;

  return (
    <Container maxWidth="lg">
      <Grid className={classes.container} container spacing={3} >
        {results?.length > 0 ? results?.map((item: ISale) => {
          return (
            <Grid key={item.gameID} item xs={12} sm={6} md={4}>
              <Item item={item} />
            </Grid>
          );
        }) : null}
      </Grid>
    </Container>
  )
}

export default Sales
