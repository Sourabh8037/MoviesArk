import { Fab, FormControl, Grid, Hidden, InputLabel, makeStyles, Menu, MenuItem, Select } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import {setGenreFilter,setSortFilter,setYearFilter} from '../../store/actions/index';
import { FilterListRounded } from '@material-ui/icons';


const yearToday = new Date().getFullYear();
const years = [];

for (let i = yearToday; i >= 1883; i--) {
  years.push(i);
}

const useStyles = makeStyles(theme=>({
  formControl:{
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const Filter = (props) => {
  const [y, setYear] = React.useState('');
  const [anchorEl,setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const { filterCategory, filterData } = props;
  const { year, sort, genre } = filterData;
  const classes = useStyles();
  
  const onFilterToggle = () => {
    document.body.classList.toggle('is-filter-open');
  };

  const onYearFilterChange = (e) => {
    const selected = e.target.value;
    setYear(selected);
    dispatch(setYearFilter(selected, filterCategory));
  };

  const onSortFilterChange = (e) => {
    const selected = e.target.value;
    dispatch(setSortFilter(selected, filterCategory));
  };

  const onGenreFilterChange = (e) => {
    const selected = e.target.value;
    dispatch(setGenreFilter(selected, filterCategory));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const movieSortFilter = <Grid item xs={8} sm={4}>
  <FormControl className={classes.formControl}>
  <InputLabel id="movie-sort-filter">Sort By</InputLabel>
  <Select
    labelId="movie-sort-filter"
    id="sort-filter"
    value={sort}
    onChange={onSortFilterChange}
    displayEmpty
    className={classes.selectEmpty}
  >
      <MenuItem value="popularity.desc">Popularity Desc</MenuItem>
      <MenuItem value="popularity.asc">Popularity Asc</MenuItem>
      <MenuItem value="release_date.desc">Release Date Desc</MenuItem>
      <MenuItem value="release_date.asc">Release Date Asc</MenuItem>
      <MenuItem value="vote_count.desc">Vote Desc</MenuItem>
      <MenuItem value="vote_count.asc">Vote Asc</MenuItem>
      <MenuItem value="original_title.asc">Title (A-Z)</MenuItem>
      <MenuItem value="original_title.desc">Title (Z-A)</MenuItem>
  </Select>
  </FormControl>
</Grid>

const yearSortFilter =       <Grid item xs={8} sm={4}>
<FormControl className={classes.formControl}>
<InputLabel id="movie-year-filter">Year</InputLabel>
<Select
  labelId="movie-year-filter"
  id="year-filter"
  value={year}
  onChange={onYearFilterChange}
  displayEmpty
  className={classes.selectEmpty}
>
  {years.map((year)=><MenuItem value={year} key={year}>{year}</MenuItem>)}
</Select>
</FormControl>
</Grid>

const genreSortFilter =       <Grid item xs={8} sm={4}>
<FormControl className={classes.formControl}>
<InputLabel id="movie-genre-filter">Genre</InputLabel>
<Select
  labelId="movie-genre-filter"
  id="genre-filter"
  value={genre}
  onChange={onGenreFilterChange}
  displayEmpty
  className={classes.selectEmpty}
>
    <MenuItem value="28">Action</MenuItem>
    <MenuItem value="12">Adventure</MenuItem>
    <MenuItem value="16">Animation</MenuItem>
    <MenuItem value="35">Comedy</MenuItem>
    <MenuItem value="80">Crime</MenuItem>
    <MenuItem value="99">Documentary</MenuItem>
    <MenuItem value="18">Drama</MenuItem>
    <MenuItem value="10751">Family</MenuItem>
    <MenuItem value="14">Fantasy</MenuItem>
    <MenuItem value="36">History</MenuItem>
    <MenuItem value="27">Horror</MenuItem>
    <MenuItem value="10402">Music</MenuItem>
    <MenuItem value="9648">Mystery</MenuItem>
    <MenuItem value="10749">Romance</MenuItem>
    <MenuItem value="878">Sci-Fi</MenuItem>
    <MenuItem value="10770">TV Movie</MenuItem>
    <MenuItem value="53">Thriller</MenuItem>
    <MenuItem value="10752">War</MenuItem>
    <MenuItem value="37">Western</MenuItem>
</Select>
</FormControl>
</Grid>;

  return (
    <React.Fragment>
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Hidden mdUp>
      <Fab onClick={handleClick} aria-controls="simple-menu" color="primary" aria-label="edit">
      <FilterListRounded></FilterListRounded>
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
      {yearSortFilter}
      </MenuItem>
      <MenuItem onClick={handleClose}>
      {genreSortFilter}
      </MenuItem>
      <MenuItem onClick={handleClose}>
      {movieSortFilter}
      </MenuItem>
      </Menu>
      </Hidden>
  <Hidden smDown>
  {yearSortFilter}
    {genreSortFilter}
    {movieSortFilter}
    </Hidden>
    </Grid>
    </React.Fragment>
  )
}

export default Filter
