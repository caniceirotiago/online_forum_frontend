import React from 'react';

const LoginForm = () => {
    const registerData = {
        username: '',
        password: ''
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        registerData[name] = value
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(registerData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor = "username">Username</label>
                <input type="text" id="username" name="username" placeholder="username" onChange={handleChange}></input>
                <label htmlFor = "password">password</label>
                <input type="password" id="password" name="password" placeholder="password" onChange={handleChange}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;