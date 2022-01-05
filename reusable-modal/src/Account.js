import React, { useState, useEffect, useReducer } from 'react';

const ADD_ACCOUNT_CONFIRM = 'ADD_ACCOUNT_CONFIRM';
const ADD_ACCOUNT_SUCCESS = 'ADD_ACCOUNT_SUCCESS';
const REMOVE_ACCOUNT_CONFIRM = 'REMOVE_ACCOUNT_CONFIRM';
const REMOVE_ACCOUNT_SUCCESS = 'REMOVE_ACCOUNT_SUCCESS';

const modalReducer = (state:any, action: any) => {

    switch (action.type) {
        case ADD_ACCOUNT_CONFIRM:
            console.log("Add account confirm");
            return {
                heading: 'Confirm account addition',
                content: 'Are you sure you want to add the account?',
                show: true
            }
        case ADD_ACCOUNT_SUCCESS:
            console.log("Add account success");
            return {
                heading: 'Successful account addition',
                content: 'You successfully added this account',
                show: true
            }
        case REMOVE_ACCOUNT_CONFIRM:
            console.log("Remove account confirm");
            return {
                heading: 'Confirm account removal',
                content: 'Are you sure you want to remove this account?',
                show: true
            }
        case REMOVE_ACCOUNT_SUCCESS:
            console.log("Remove account success")
            return {
                heading: 'Successful account removal',
                content: 'You successfully removed this account',
                show: true
            }
    }
}

const Account = () => {

    const [modalState, modalDispatch] = useReducer(modalReducer,{
        heading: '',
        content: '',
        show: false
    })

    return(
        <>
            <h4>Add and Remove account</h4>
            <button>Add account</button>
            <button>Remove account</button>
        </>
    );
}

export default Account;