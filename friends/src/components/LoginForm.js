import React, { useState } from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
// Material UI imports
import { Paper, Typography, Button, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      width: '30%',
      marginRight: '30px',
      backgroundColor: '#fbffd8',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '80%',
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 500,
    },
    button: {
      margin: theme.spacing(1),
      height: 40,
      backgroundColor: '#233536',
      color: '#fbffd8',
      width: 325,
    },
    font: {
      color: '#0bcbc3',
      fontFamily: 'Liu Jian Mao Cao, cursive',
      fontSize: 65,
      paddingBottom: 20,
    },
  }));

function LoginForm(props) {
    const classes = useStyles(); 
    const [error, setError] = useState();
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };
    
    const login = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/login', data)
        .then(result => {
            localStorage.setItem('token', result.data.token)
            props.history.push('/account')
        })
        .catch(err => {
            setError(err.response.data.message)
        })
    };

    return (
        <Paper className={classes.root}>
            <form className={classes.container} autoComplete='off' onSubmit={login}>
                {error && <div className='error'>{error}</div>}

                <Typography className={classes.font} variant='h4'>
                    Login
                </Typography>
                <TextField
                    id='outlined-username-input'
                    label='username'
                    className={classes.textField}
                    type='username'
                    name='username'
                    autoComplete='username'
                    margin='normal'
                    variant='outlined'
                    onChange={handleChange}
                    required
                />
                <TextField
                    id='outlined-password-input'
                    label='password'
                    className={classes.textField}
                    type='password'
                    name='password'
                    autoComplete='current-password'
                    margin='normal'
                    variant='outlined'
                    onChange={handleChange}
                    required
                />
                <Button className={classes.button} variant='contained' type='submit'>Log In!</Button>
            </form>
        </Paper>
    )
}

export default connect(state => {
    return state;
})(LoginForm);

