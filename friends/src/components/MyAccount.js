import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';

import FriendsCard from './FriendsCard';
import FriendsForm from './FriendsForm';

function MyAccount() {
    const [user, setUser] = useState({
        name:'', 
        email: ''
    });

    useEffect(() => {
        axiosWithAuth()
        .get('/login', user)
        .then(res => {
            setUser({
                name: res.data.name,
                email: res.data.email
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [user]);

    return (
        <>
            <h2>My Account</h2>
            <FriendsForm />
            <FriendsCard />
        </>
    )
}

export default connect(state => {
    return state;
})(MyAccount);