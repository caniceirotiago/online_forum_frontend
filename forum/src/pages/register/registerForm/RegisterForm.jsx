import React from 'react';
import userService from '../../../services/userService'
import registerStore from '../../../stores/RegisterStore'
import { observer } from 'mobx-react-lite';

const RegisterForm = observer(() => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            registerStore.setUsername(value);
        } else if (name === 'email') {
            registerStore.setEmail(value);
        } else if (name === 'password') {
            registerStore.setPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = {
                username: registerStore.username,
                email: registerStore.email,
                password: registerStore.password
            }
            const response = await userService.registerUser(data);
            console.log(response.json());
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor = "username">Username</label>
                <input type="text" id="username" name="username" placeholder="username" onChange={handleChange}></input>
                <label htmlFor = "email">email</label>
                <input type="email" id="email" name="email" placeholder="email" onChange={handleChange}></input>
                <label htmlFor = "password">password</label>
                <input type="password" id="password" name="password" placeholder="password" onChange={handleChange}></input>
                <button type="submit">Register</button>
            </form>
        </div>
    );
})

export default RegisterForm;