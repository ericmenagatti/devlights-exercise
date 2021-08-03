import React, { useState, useCallback } from 'react';
import { debounce as _debounce } from 'lodash';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Sales from 'src/containers/Sales';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '150px',
  },
  imgBox: {
    maxHeight: "500px",
    overflow: 'hidden',
  },
  searchBtnGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  searchBtn: {
    position: 'relative',
    color: '#DB0F64',
    padding: theme.spacing(1),
    fontSize: '30px',
    '& > .MuiInputBase-input::placeholder': {
      color: '#DB0F64',
      fontSize: '30px',
      opacity: 'unset',
    },
    '& > .MuiInputBase-input:focus': {
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
    },
    '& > svg': {
      color: '#DB0F64',
    },
    '& > fieldset': {
      border: 'none',
    },
    '&::before': {
      position: 'absolute',
      borderRadius: '10px',
      padding: '3px',
      content: '""',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to right, rgb(255, 169, 0) 0%, rgb(208, 0, 83) 49%, rgb(146, 0, 142) 97%) border-box',
      maskComposite: 'exclude',
      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    }
  },
  svg: {
    color: 'blue',
    width: '40px',
    height: '40px',
  }
}));

const Main = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => e.target.value);
    debouncedSearch(e.target.value);
  };

  const search = async (_query: string): Promise<void> => {
    setQuery(_query);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(_debounce(search, 1000), []);

  return (
    <div className={classes.root}>
      <div className={classes.imgBox}>
        <img src="img/banner.jpg" alt="Banner" width="100%" />
      </div>
      <Grid container>
        <Grid className={classes.searchBtnGrid} item xs={12}>
          <FormControl variant="outlined">
            <OutlinedInput
              className={classes.searchBtn}
              id="searchInput"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
              endAdornment={<SearchIcon className={classes.svg} />}
              aria-describedby="Search"
              inputProps={{
                'aria-label': 'search',
              }}
              placeholder="Search"
              labelWidth={0}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Sales query={query} />
    </div>
  );
};

export default Main;
