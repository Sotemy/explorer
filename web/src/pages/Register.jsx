import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

import { register, reset } from '../features/auth/authSlice';
import Spinn from "../components/Spinn";

function Register() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const {username, email, password, password2} = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

        useEffect(() => {
            if(isError){
                toast.error(message)
            }

            if(isSuccess || user){
                navigate('/')
            }

            dispatch(reset())

        }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2){
            toast.error("Passwords don't match")
        } else {
            const userData = {
                username, 
                email, 
                password
            }

            dispatch(register(userData))
        }
    }

    if(isLoading){
        return (
            <div id="spinner-container">
                <Spinn />
            </div>
            )
    }

  return (
    <>
    <section className="heading">
        <h1>
            <FaUser /> Register
        </h1>
        <p>Please create an account</p>
    </section>
    <div className="container">
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                        <input type="text" 
                        className='form-control' 
                        id='username' 
                        name='username' 
                        value={username} 
                        placeholder='Enter username' 
                        onChange={onChange} />
                </div>
                <div className="form-group">
                        <input type="email" 
                        className='form-control' 
                        id='email' 
                        name='email' 
                        value={email} 
                        placeholder='Enter email' 
                        onChange={onChange} />
                </div>
                <div className="form-group">
                        <input type="password" 
                        className='form-control' 
                        id='password' 
                        name='password' 
                        value={password} 
                        placeholder='Enter password' 
                        onChange={onChange} />
                </div>
                <div className="form-group">
                        <input type="password" 
                        className='form-control' 
                        id='password2' 
                        name='password2' 
                        value={password2} 
                        placeholder='Enter password again' 
                        onChange={onChange} />
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    </div>
    </>
  )
}

export default Register