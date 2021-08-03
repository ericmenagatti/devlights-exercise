import { Suspense, lazy, useEffect, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from 'src/hoc/Layout';
import Main from 'src/pages/Main';
import { LinearProgress } from '@material-ui/core';
import * as actions from 'src/store/actions/index';

const Cart = lazy(() => import('src/pages/Cart'));

const App = () => {
  const dispatch = useDispatch();
  const onTryFetchSales = useCallback(() => dispatch(actions.fetchSales()), [
    dispatch,
  ]);

  useEffect(() => {
    onTryFetchSales();
  }, [onTryFetchSales]);

  const routes = (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/cart' component={Cart} />
        <Route path='/' component={Main} />
        <Redirect to='/' />
      </Switch>
    </Suspense>
  );

  return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;
