import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Axios from 'axios';
import {NavLink} from 'react-router-dom';
import useReactRouter from 'use-react-router'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Anywhere Fitness
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles=makeStyles( theme => ( {
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage:
      'url(https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing( 8, 4 ),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing( 1 ),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing( 1 )
  },
  submit: {
    margin: theme.spacing( 3, 0, 2 )
  }
} ) );

export default function Login( props ) {
  const {user, setUser,setWelcome}=props
  const {history}=useReactRouter()
  const [loginData, setLoginData]=useState( {
    username: '',
    password: ''
  } );
  const classes=useStyles();

  const changeHandler=e => {
    setLoginData( {...loginData,[e.target.name]: e.target.value } );
  };
  let resultData;
  const submitHandler=e => {
    e.preventDefault();
    Axios.post( 'https://lambda-anywhere-fitness.herokuapp.com/api/auth/login', loginData )
    .then( res => {
        console.log( res, loginData );
        localStorage.setItem( 'token', JSON.stringify( res.data.token ) );
        localStorage.setItem( 'currentUser', JSON.stringify( res.data.user ) );
        setLoginData( {username: '',password:'',})
        let resultData=res;
        setUser( res.data.user )
        console.log( 'res.data.user:', res.data.user )
        history.push( '/dashboard' )}) /* fill in place holder!!! */
         .then(()=>setWelcome(resultData.message))
      
      .catch( err => console.error( err ) );}
  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Anywhere Fitness Sign in
          </Typography>
          <form onSubmit={submitHandler} className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='User Name'
              name='username'
              autoComplete='username'
              onChange={changeHandler}
              value={loginData.username}
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              value={loginData.password}
              onChange={changeHandler}
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='client' color='primary' />}
              label='client'
            />
            <FormControlLabel
              control={<Checkbox value='instructor' color='primary' />}
              label='instructor'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <NavLink to='/register' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
