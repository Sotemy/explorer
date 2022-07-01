import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Spinn from "../components/Spinn";
import { login, reset } from "../features/auth/authSlice";

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

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

            const userData = {
            email, 
            password
        }

        dispatch(login(userData))
        
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
            <FaSignInAlt /> Login
        </h1>
        <p>Please login</p>
    </section>
    <div className="container">
        <section className="form">
            <form onSubmit={onSubmit}>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    </div>
    </>
  )
}

export default Login