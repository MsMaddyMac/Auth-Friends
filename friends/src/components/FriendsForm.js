// react imports
import React, { useState } from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action import

// Material UI imports
import { Paper, Typography, MenuItem, makeStyles, Button, TextField, InputBase } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: '30%',
        marginLeft: '30px',
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
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
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
        color: 'black',
        fontSize: 65,
        paddingBottom: 20,
      },
}));

function FriendsForm() {
    const [values, setValues] = useState({
        name: '',
        age: 0,
        email: ''
    })
}

const handleChange = e => setValues({...values, [e.target.name]: e.target.value});

const handleSubmit = e => {
    e.preventDefault();
    // props.dispatch postFriends here
}

return (
    <Paper className={classes.root}>
        <form className={classes.container} autoComplete="off" onSubmit={handleSubmit}>
            <Typography className={classes.font} variant="h4">
                Add a Friend!
            </Typography>
            <TextFeld
                id="outlined-name"
                label="name"
                className={classes.textField}
                type="text"
                name="name"
                value={values.name}
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                required
            />
            <TextFeld
                id="outlined-age"
                label="age"
                className={classes.textField}
                type="text"
                name="age"
                value={values.age}
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                required
            />
            <TextFeld
                id="outlined-email-input"
                label="email"
                className={classes.textField}
                type="text"
                name="email"
                autoComplete="email"
                value={values.name}
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                required
            />
            <Button className={classes.button} variant="contained" type="submit">Submit</Button>
        </form>
    </Paper>
)