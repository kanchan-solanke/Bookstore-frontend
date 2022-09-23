import React, { useState} from 'react'
import './login.css'
import Button from '@mui/material/Button';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import { signIn } from '../../Services/userService';
import { TextField } from '@mui/material';

function Login(props) {

    const listeningToLogin = () => {
        props.listenToLogin()
      }

      const listeningToSignUp = () => {
        console.log("hello")
        props.listenToSignUp()
    }



    const emailRegex =
        /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;

    const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const [siginObj, setSigninObj] = useState({ email: "", password: "" });

    const [regexObj, setRegExObj] = useState({
        emailBorder: false,
        passwordBorder: false,
        emailHelper: "",
        passwordHelper: "",
    });

    const takeEmail = (event) => {
        setSigninObj((prevState) =>
        (
            { ...prevState, email: event.target.value }
        ));
    };

    const takePass = (event) => {
        setSigninObj((prevState) =>
        ({
            ...prevState,
            password: event.target.value,
        }));
    };

    const submit = () => {
        let emailTest = emailRegex.test(siginObj.email);
        let passwordTest = passwordRegex.test(siginObj.password);

        if (emailTest === false) {
            setRegExObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "enter correct email",
            }));
        }
        else if (emailTest === true) {
            setRegExObj((prevState) => ({
                ...prevState,
                emailBorder: false,
                emailHelper: "",
            }));
        }

        if (passwordTest === false) {
            setRegExObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "enter correct p",
            }));
        }
        else if (emailTest === true) {
            setRegExObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }


        if (emailTest === true && passwordTest === true)
            console.log(emailTest + " " + passwordTest)
        signIn(siginObj)
            .then((response) => {
                console.log(response);
                localStorage.setItem("Token", response.data.data)
            })
            .catch((error) => { console.log(error) })
    }

    return (
        <div>
            <div className='outer'>

                <div className='left'>
                    <Button variant="text" size="large" style={{fontSize:20, color: "black", size: "large" }}  onClick={listeningToLogin}> LOGIN </Button>
                    <Button variant="text" size="large" style={{fontSize:20, color: "black", size: "large" }} onClick={listeningToSignUp}> SignUp </Button>
                </div>
                
                <div className='inner'>
                    <div className='email'>
                        <TextField
                            id="email"
                            label="email"
                            size="small"
                            onChange={takeEmail}
                            error={regexObj.emailBorder}
                            helperText={regexObj.emailHelper} />


                    </div>

                    <div className='password'>
                        {/* <div className='password-one'> */}
                        <TextField
                            id="password"
                            label="password"
                            size="small"
                            onChange={takePass}
                            error={regexObj.passwordBorder}
                            helperText={regexObj.passwordHelper} />

                        {/* <div className='password-two'>
                            <span>
                                <VisibilityOffIcon size="small" htmlColor='grey' id="visibile-icon" />
                            </span>

                        </div> */}

                        <div className='forgot-password'>

                            <Link href="#" underline="none" style={{ color: "gray", size: "large" }}>
                                Forgot password?
                            </Link>

                        </div>

                    </div>

                    <div className='login-button'>
                        <Button style={{ color: "#9D9D9D", size: "large" }} onClick={submit}>
                            Login
                        </Button>
                    </div>

                    <div className='Or-text'>
                        <label> ------------ OR --------------</label>
                    </div>

                    <div className='button'>
                        <div className='facebook'>
                            <Button variant="contained" size="medium" style={{ color: "white", size: "large", backgroundColor: '#4266B2', fontSize: 'small' }}>
                                Facebook
                            </Button>
                        </div>

                        <div className='google'>
                            <Button style={{ color: "black", size: "large", fontSize: 'small', backgroundColor: '#F5F5F5' }}>
                                Google
                            </Button>
                        </div>

                    </div>



                </div>

            </div>
        </div>

    )
}

export default Login
