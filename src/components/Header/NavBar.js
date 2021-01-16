import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {SwipeableDrawer,fade, InputBase} from "@material-ui/core";
import * as routes from '../../constants/routes';
import TvIcon from "@material-ui/icons/Tv";
import { NavLink} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width:"50%"
  },
  title: {
    fontFamily: "Patrick Hand",
    marginRight: theme.spacing(2),
    color:"white",
    textDecoration:"none",
  },
  appBar:{
    backgroundColor:"rgba(0,0,0,0.3)"
  },
  whitespace:{
    flexGrow:1,
  },
  menuOption:{
    fontSize:"1.2rem",
    fontFamily:"Patrick Hand",
    color:"#CCCCCC",
    margin:"auto",
    padding:"0.5rem 1rem",
    backgroundColor:"transparent",
    textDecoration:"none",
  },
  menuOptionActive:{
    color:"#18ffff",
  },
  link: {
    textDecoration: "none",
    color:theme.palette.text.secondary,
    fontFamily:"Patrick Hand"
  },
  linkActive: {
    textDecoration: "none",
    backgroundColor:"rgba(0,0,0,0.3)",
    color:"#18ffff",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"white",
  },
  // necessary for content to be below app bar
  drawerPaper: {
    width: drawerWidth,
    height:64,
    background:theme.palette.background.paper,
  },
  content: {
    marginTop:"4rem",
    width:"100%",
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin:"auto 0.5rem",
    width: '16rem',
    display:"flex",
  },
  searchIcon: {
    margin:"auto 0.2rem",
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft:2,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize:"1rem",
    color:"white",
  },
})); 

const menuArr = [
  {
    title: "Home",
    icon: <TvIcon></TvIcon>,
    path: routes.HOME,
  },
  {
    title: "Trending",
    icon: <TvIcon></TvIcon>,
    path: routes.TRENDING,
  },
  {
    title: "Discover",
    icon: <TvIcon></TvIcon>,
    path: routes.DISCOVER,
  },
  {
    title: "TV Shows",
    icon: <TvIcon></TvIcon>,
    path: routes.TV,
  },
  {
    title: "People",
    icon: <TvIcon></TvIcon>,
    path: routes.PEOPLE,
  },
  {
    title: "Genre",
    icon: <TvIcon></TvIcon>,
    path: routes.GENRE,
  },
];

function ResponsiveDrawer(props) {
  const [searchQuery, setSearchQuery]= React.useState();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(mobileOpen=>!mobileOpen);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const onSubmitQuery = () => {
    if (searchQuery) {
      let query=searchQuery;
      setSearchQuery('');
      props.history.push(`/search/movie/${query}`);
    }
  };

  const onKeyEnter = (e) => {
    if (e.key === 'Enter' && searchQuery) {
      onSubmitQuery();
    }
  };

  const menuOptions = <Hidden smDown>
    {menuArr.map((item,index)=><NavLink
      to={item.path}
      key={item.title}
      exact
      activeClassName={classes.menuOptionActive}
      className={classes.menuOption}    
      >{item.title}</NavLink>)}
      <div className={classes.whitespace}></div>
      <div className={classes.search}>
      <IconButton onClick={onSubmitQuery} className={classes.searchIcon}>
              <SearchIcon />
      </IconButton>
            <InputBase
              onKeyPress={onKeyEnter}
              placeholder="Search…"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleChange}
            />
          </div>
  </Hidden>

  const drawer = (
    <div>
      <div className={classes.drawerPaper} />
      <Divider />
      <List>
        {menuArr.map((item, index) => (
          <NavLink
            to={item.path}
            key={item.title}
            exact
            activeClassName={classes.linkActive}
            className={classes.link}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </NavLink>
        ))}
        <ListItem>
        <div className={classes.search}>
      <IconButton onClick={onSubmitQuery} className={classes.searchIcon}>
              <SearchIcon />
      </IconButton>
            <InputBase
              onKeyPress={onKeyEnter}
              placeholder="Search…"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleChange}
            />
          </div>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" color="transparent" className={classes.appBar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <NavLink to={routes.HOME} className={classes.title}>
          <Typography variant="h5" className={classes.title} noWrap>
            MoviesArk
          </Typography>
          </NavLink>
          {menuOptions}
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders">
          <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            ModalProps={{
              keepMounted: false, // Better open performance on mobile.
            }}>
            {drawer}
          </SwipeableDrawer>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
