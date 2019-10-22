import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
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
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import useReactRouter from 'use-react-router';
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

const useStyles = makeStyles(theme => ({
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
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Register(props) {
  const { history, location, match } = useReactRouter();
  const classes = useStyles();
  const initialUserState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    roleId: 1
  };
  const [newUser, setnewUser] = useState(initialUserState);

  const handleChange = event => {
    setnewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const register = userObject => {
    axios
      .post(
        `https://lambda-anywhere-fitness.herokuapp.com/api/auth/register/`,
        userObject
      )
      .then(res => {
        // const userInfo = JSON.stringify(res.data.user.token);
        console.log(res);
        localStorage.setItem('token', res.data.token);
        history.push('/dashboard');
      })
      .catch(error => {
        console.error(error, error.response);
        history.push('/register');
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    register(newUser);
    reset();
    history.push('/dashboard');
  };

  const reset = () => {
    setnewUser(initialUserState);
  };
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
            Anywhere Fitness Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onSubmit={handleSubmit}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='username'
              type='username'
              id='username'
              name='username'
              autoComplete='username'
              autoFocus
              onChange={handleChange}
              value={newUser.username}
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
              autoComplete='current-password'
              onChange={handleChange}
              value={newUser.password}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='firstName'
              label='firstName'
              type='firstName'
              id='firstName'
              autoComplete='current-firstName'
              onChange={handleChange}
              value={newUser.firstName}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='lastName'
              label='lastName'
              type='lastName'
              id='lastName'
              autoComplete='current-lastName'
              onChange={handleChange}
              value={newUser.lastName}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Email Address'
              type='email'
              id='email'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={handleChange}
              value={newUser.email}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='roleId'
              label='enter "1" for client or "2" for instructor'
              type='roleId'
              id='roleId'
              autoComplete='current-roleId'
              onChange={handleChange}
              value={newUser.roleId}
            />
            <FormControlLabel
              control={<Checkbox value={`${1}`} color='primary' />}
              label='client'
            />
            <FormControlLabel
              control={<Checkbox value={`${2}`} color='primary' />}
              label='instructor'
            />
            <Button
              type='reset'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              inactive='true'
              onClick={handleSubmit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <NavLink to='/'>" Already have an account? Log In"</NavLink>
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

const RegisterForm = withRouter(Register);
export default RegisterForm;
