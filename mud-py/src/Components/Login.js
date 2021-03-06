import React from 'react';
import Register from './Register';
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
  withStyles
} from '@material-ui/core';
import axios from 'axios';

import { mudAddress } from '../address';

const useStylesLogin = makeStyles(theme => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#888',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#bbb'
    },
    '&$focused': {
      backgroundColor: '#fff',
      borderColor: theme.palette.primary.main
    }
  },
  focused: {}
}));

// the login/register buttons
const PrimaryButton = withStyles({
  root: {
    backgroundColor: 'darkorange',
    color: 'black',
    border: '6px solid firebrick',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#cc6c00',
      borderColor: 'darkred'
    }
  }
})(Button);

// switch to login or register button
const SecondaryButton = withStyles({
  root: {
    backgroundColor: '#222',
    color: 'white',
    border: '3px solid darkorchid',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#000',
      borderColor: '#9932CC'
    }
  }
})(Button);

function LoginTextField(props) {
  const classes = useStylesLogin();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      username: '',
      password: '',
      passwordCheck: '',
      passwordValid: true,
      passwordCheckValid: true,
      loginError: ''
    };
  }

  // toggle for switching to/fro registration component
  registerChange = () => {
    this.setState(prev => {
      return { register: !prev.register, loginError: '' };
    });
  };

  // changes the state as UN and PW are typed
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // logs in if successfully entered proper credentials
  loginHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post(mudAddress + 'login/', {
        username: username,
        password: password
      })
      .then(data => {
        localStorage.setItem('Authorization', data.data.key);
        this.setState({ loginError: '' });
        this.props.login();
      })
      .catch(err => {
        this.setState({ loginError: err.response.data.non_field_errors[0] });
        console.log(err.response.data.non_field_errors[0]);
      });
  };

  // registers new user and logs them in
  registrationHandler = e => {
    e.preventDefault();
    const { username, password, passwordCheck } = this.state;
    if (password === passwordCheck) {
      axios
        .post(mudAddress + 'registration/', {
          username: username,
          password1: password,
          password2: passwordCheck
        })
        .then(data => {
          localStorage.setItem('Authorization', data.data.key);
          this.setState({ loginError: '' });
          this.props.login();
        })
        .catch(err => {
          let errMessage
          if (err.response.data.username) {
            errMessage = err.response.data.username[0];
          } else if (err.response.data.password1) {
            errMessage = err.response.data.password1[0];
          } else if (err.response.data.non_field_errors) {
            errMessage = err.response.data.non_field_errors[0];
          }

          this.setState({ loginError: errMessage });
          console.log(errMessage);
        });
    } // if typed passwords don't match
    else {
      this.setState(prev => {
        return {
          passwordCheckValid: !prev.passwordCheckValid,
          password: '',
          passwordCheck: '',
          loginError: "The passwords don't match."
        };
      });
    }
  };

  render() {
    const { passwordValid, loginError } = this.state;

    return (
      <Container
        maxWidth="xs"
        style={{ color: 'gold', height: 'calc(100vh - 168px)' }}
      >
        {// register coponenet displays on toggle
        this.state.register ? (
          <Register
            registerChange={this.registerChange}
            changeHandler={this.changeHandler}
            registrationHandler={this.registrationHandler}
            passwordValid={this.state.passwordValid}
            passwordCheckValid={this.state.passwordCheckValid}
            username={this.state.username}
            password={this.state.password}
            passwordCheck={this.state.passwordCheck}
            LoginTextField={LoginTextField}
            PrimaryButton={PrimaryButton}
            SecondaryButton={SecondaryButton}
            loginError={this.state.loginError}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '10vh'
            }}
          >
            <Typography variant="h4">Login</Typography>
            <form onSubmit={this.loginHandler}>
              <LoginTextField
                variant="filled"
                id="username"
                label="Username"
                value={this.state.username}
                name="username"
                margin="normal"
                required
                fullWidth
                onChange={e => this.changeHandler(e)}
                autoFocus
              />
              <LoginTextField
                variant="filled"
                id="password"
                label="Password"
                value={this.state.password}
                name="password"
                margin="normal"
                required
                error={!passwordValid}
                fullWidth
                type="password"
                onChange={e => this.changeHandler(e)}
              />
              <PrimaryButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </PrimaryButton>
              <SecondaryButton
                onClick={this.registerChange}
                component="div"
                color="primary"
                fullWidth
                variant="outlined"
                style={{ margin: '10px 0' }}
              >
                Don't have an account? Sign Up
              </SecondaryButton>
            </form>
            {loginError ? loginError : null}
          </div>
        )}
      </Container>
    );
  }
}

export default Login;
