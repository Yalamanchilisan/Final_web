import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import login_picture from "../Assets/login_picture.jpg";

export default function Login() {
    const { AuthLoginFunc, AuthNameFunc } = useContext(authContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const toast = useToast();
    const navigate = useNavigate();

    const showErrorToast = (error) => {
        toast({
            title: error,
            status: 'error',
            duration: 2000,
            isClosable: true,
        });
    };

    const onSubmit = (data) => {
        axios.post("https://cute-erin-tick-hat.cyclic.cloud/user/login", data)
            .then((res) => {
                AuthLoginFunc();
                toast({
                    title: res.data.message,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
                AuthNameFunc(res.data.userName);
                localStorage.setItem("token", JSON.stringify(res.data.token));
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            })
            .catch((err) => {
                if (err.response) {
                    const status = err.response.status;
                    const errorMessage = err.response.data.error;
                    if (status === 402 || status === 403) {
                        showErrorToast(errorMessage);
                    }
                } else {
                    showErrorToast('An unexpected error occurred.');
                }
            });
    };

    return (
        <div className='Regis'>
            <section>
                <div className="register">
                    <div className="col-1">
                        <h2 className="Sign">Login</h2>
                        <span className="Sign1">login to meet your furry friend</span>
                        <form id='form' className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" {...register("email", { required: "Email is required" })} placeholder='Email' />
                            {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
                            <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" }})} placeholder='Password' />
                            {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
                            <button className='btn'>Sign In</button>
                            <Link to="/adminLogin"><h1>Admin ?</h1></Link>
                        </form>
                    </div>
                    <div className="col-2">
                        <img src={login_picture} alt="Login visual" />
                    </div>
                </div>
            </section>
        </div>
    );
}
