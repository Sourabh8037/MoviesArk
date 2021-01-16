import { ThemeProvider } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/Header/NavBar';
import Home from './containers/Home';
import UpcomingMovies from './containers/UpcomingMovies';
import * as routes from './constants/routes';
import TopRatedMovies from './containers/TopRatedMovies';
import TrendingMovies from './containers/TrendingMovies';
import ViewMovie from './containers/ViewMovie';
import {DarkTheme, LightTheme} from './common/Theme';
import { useState } from 'react';
import DiscoverMovies from './containers/DiscoverMovies';
import TvShows from './containers/TvShows';
import People from './containers/People';
import ViewPeople from './containers/ViewPeople';
import ViewCasting from './containers/ViewCasting';
import Genre from './containers/Genre';
import ViewGenre from './containers/ViewGenre';
import ViewPictures from './containers/ViewPictures';
import Search from './containers/Search';
import ScrollTop from './common/ScrollTop';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={DarkTheme}>
        <ScrollTop />
        <Route path="/" component={NavBar}/>
      <Switch>
          <Route path={routes.HOME} exact component={Home}></Route>
          <Route path={routes.UPCOMING} exact component={UpcomingMovies}></Route>
          <Route path={routes.TOP_RATED} exact component={TopRatedMovies}></Route>
          <Route path={routes.VIEW_MOVIE} exact component={ViewMovie}></Route>
          <Route path={routes.TRENDING} exact component={TrendingMovies}></Route>
          <Route path={routes.DISCOVER} exact component={DiscoverMovies}></Route>
          <Route path={routes.TV} exact component={TvShows}></Route>
          <Route path={routes.PEOPLE} exact component={People}></Route>
          <Route path={routes.VIEW_PEOPLE} exact component={ViewPeople}></Route>
          <Route path={routes.VIEW_PEOPLE_CASTING} exact component={ViewCasting}></Route>
          <Route path={routes.GENRE} exact component={Genre}></Route>
          <Route path={routes.VIEW_GENRE} exact component={ViewGenre}></Route>
          <Route path={routes.VIEW_PEOPLE_PROFILE} exact component={ViewPictures}></Route>
          <Route path={routes.SEARCH} exact component={Search}></Route>
          <Redirect to={routes.HOME}></Redirect>
        </Switch>
        </ThemeProvider>
    </div>
  );
}

export default App;
