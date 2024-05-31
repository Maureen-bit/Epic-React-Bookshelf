import React from 'react';

const LoginForm = ({onSendData, buttonText}) => {

    const onGetFormData = (event) => {
        event.preventDefault();

        const { username, password } = event.target.elements;
        onSendData({
            username: username.value,
            password: password.value
        })
    };

    return (
        <form onSubmit={onGetFormData}>
            <label htmlFor="username">Username</label>
            <input name="username" onChange={onGetFormData}></input>
            <label htmlFor="password">Password</label>
            <input name="password" type='password' onChange={onGetFormData}></input>
            <button type='submit'>{buttonText}</button>
        </form>
    );
}

export default LoginForm;