import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from './usersSlice';
import "./Users.css";

function Users() {
    const users = useSelector(state => state.users.users);

    const dispatch = useDispatch();


    // fetching data from fake site to check. axios is safe way to make ajax request.
    const fetchUsers = async () => {
        const response = await axios.get("https://reqres.in/api/users").catch((err) => console.log("error: ", err));

        dispatch(setUsers(response.data.data));
        // console.log("users: ", response.data.data);
    };

    // calling the function by useEffect once component did mount.
    useEffect(() => {
        fetchUsers();
    });

    // console.log(users);
    return (
        <div className="users">
            {
                users.map((user) => {
                    return (
                    <div key={user.id} className="user">
                        <h4>User: {user.first_name} {user.last_name}</h4>
                        <p>Email: {user.email}</p>
                        <img src={user.avatar} alt="avatar" />
                        <hr />
                    </div>
                    );
                })
            }
        </div>
    )
}

export default Users;
