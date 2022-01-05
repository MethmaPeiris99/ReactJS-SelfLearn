import React, {useState,useEffect, useReducer} from "react";
import User from "./modals/User";

interface IUserProfile{
    user: User
}

export const UserProfile = (props:IUserProfile) => {

    const {user} = props;

    return(
        <>
            <h4>User name: {user.userName}</h4>
            <small>{user.name}</small>
            <button>Block</button>
            <button>See Availability</button>
        </>
    );
}