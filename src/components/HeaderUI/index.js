import React , {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
      marginBottom: '20px',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    // [theme.breakpoints.up('xs')]: {
    //   width: '100%',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));
const SearchAppBar = (props) => {

  const [searchValue,setSearchValue] = useState('');
  const handleChange = (e) => {
    setSearchValue( e.target.value);
}

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
        
          <div className={classes.search}>
            <form onSubmit={props.submitted}>
              <InputBase
                placeholder="Search an anime"
                fullWidth="true"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange = {handleChange}
              />
            </form>
            
          </div>
          <Button variant="contained"
                   color="primary"
                   onClick={(e)=> props.submitted(e,searchValue)}>
                Search
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchAppBar;