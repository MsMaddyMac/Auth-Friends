import React from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action import
import { getFriends } from '../actions';

const FriendsCard = props => {
    return (
        <div>
            <h2>Press for Friends List</h2>
            <button className='get-btn' onClick={() => props.dispatch(getFriends())}>Get Friends!</button>
            {props.isFetching && <h3>Friends Coming Soon!</h3>}
            {props.error && <div>{props.error.message}</div>}
                {props.friends && props.friends.map((friend, id) => {
                    <div className="friends" key={id}>
                        <h2>{friend.name}</h2>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                })}
        </div>
    )
}

export default connect(state => {
    return state;
})(FriendsCard);