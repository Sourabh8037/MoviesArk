import { makeStyles } from "@material-ui/core";
export default makeStyles(theme=>({
  root: {
    width: "100%",
  },
  p2:{
    padding:"2rem",
  },
  py2:{
    padding:"2rem auto",
  },
  containerWrapper:{
    position:"relative",
    minHeight:"110vh",
 },
 w100:{
   width:"100%",
 },
 h100:{
   height:"100%",
 },
 py4:{
  margin:"6rem auto !important",
 },
 posterContainerWrapper:{
   position:"relative",
 },
 posterSliderConent:{
  position:"relative",
  minHeight:"20vh",
  width:"100%",
  zIndex:3,
  color:"white",
  padding:"5rem auto"
},
  containerBackdrop:{
    position:"absolute",
    top:0,
    left:0,
    bottom:0,
    right:0,
    height:"100%",
    backgroundColor: "rgba(0,0,0, 0.8) !important",
    zIndex:1,
  },
  img:{
    position:"absolute",
    zIndex:0,
    height:"100%",
    width:"100%",
    top:0,
    bottom:0,
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
  },
  title:{
    color:"white",
    fontSize:"2rem",
    margin:"1rem auto",
    fontWeight:"800"
  },  
  reviewTitle:{
    fontSize:"1.2rem",
    fontWeight:"900"
  },
  sliderConent:{
    position:"relative",
    minHeight:"100vh",
    width:"100%",
    zIndex:3,
    color:"white",
    padding:"5rem auto"
  },
  ratings:{
    fontSize:"1.4rem",
    marginBottom:"1rem",
    color:"white"
  },
  movieOverview:{
    fontSize:"1.2rem",
    color:"white",
    overflow:"hidden",
    display:"-webkit-box",
    WebkitLineClamp:3,
    WebkitBoxOrient:"vertical",
  },
  personOverview:{
    fontSize:"1.2rem",
    color:"white",
    overflow:"hidden",
    display:"-webkit-box",
    WebkitLineClamp:5,
    WebkitBoxOrient:"vertical",
  },
  viewPoster:{
    width:300,
    height:450,
    objectFit:"cover",
    margin:"auto",
    [theme.breakpoints.down('md')]: {
      width:180,
      height:250,
      objectFit:"cover",
      margin:"2rem auto 1rem"
    },
  },
  viewButton:{
    maxWidth:"15rem",
    margin:"1rem auto",
  },
  modalLink:{
    textDecoration:"none",
    display:"block",
    margin:"auto",
    marginTop:"3rem",
    position:"absolute",
    zIndex:100,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth:"80%",
    width:800,
    margin:"auto"
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height:400,
    overflowY:"scroll",
  },
  modalVideo:{
    maxWidth:"80%",
  },
  my1:{
    marginTop:"1rem",
    marginBottom:"1rem",
  },
  my2:{
    marginTop:"2rem",
    marginBottom:"2rem",
  },
  my3:{
    marginTop:"3rem",
    marginBottom:"3rem",
  },
  my4:{
    margin:'4rem auto',
  },
  pyTab:{
    padding:"4rem 0.3rem 4rem",
  },
  personContainer:{
    margin:'8rem 0 2rem',
  },
  navLink:{
    color:theme.palette.text.primary,
    textDecoration:'none',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  scrollTop:{
  position:"fixed",
  bottom:"5%",
  right:"5%",
  padding:0,
  boxShadow:"0 15px 20px rgba(0,0,0,0.2)",
  transform:"scale(0)",
  zIndex:300,
  transition:"300ms linear"
  },
  themeToggler:{
    position:"fixed",
    bottom:"5%",
    left:"5%",
    padding:0,
    boxShadow:"0 15px 20px rgba(0,0,0,0.2)",
    zIndex:300,
    transition:"300ms linear"
    },
  m1:{
    margin:16
  }
}));