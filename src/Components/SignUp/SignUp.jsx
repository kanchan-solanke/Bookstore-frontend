import Button from '@mui/material/Button';
import React from 'react'
import './SignUp.css'
import { signUp } from '../../Services/userService';

function SignUp(props) {

    const listeningToLogin = () => {
        props.listenToLogin()
    }


    const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
    const phoneRegex = /^ [91][0-9]{10}$ /

    const [sigupObj, setSignupObj] = React.useState({ fullName: " ", email: " ", password: " ", phone: " " });


    const [regexObj, setRegExObj] = React.useState({
        fullnameBorder: false,
        emailBorder: false,
        passwordBorder: false,
        phoneBorder: false,

        fullnameHelper: "",
        emailHelper: "",
        passwordHelper: "",
        phoneHelper: ""
    });

    const takeFullname = (event) => {
        setSignupObj((prevState) => ({ ...prevState, fullName: event.target.value }));
    };

    const takeemail = (event) => {
        setSignupObj((prevState) => ({ ...prevState, email: event.target.value }));
    };

    const takePassword = (event) => {
        setSignupObj((prevState) => ({ ...prevState, password: event.target.value }));
    };

    const takePhone = (event) => {
        setSignupObj((prevState) => ({ ...prevState, phone: event.target.value }));
    };
    const submit = () => {
        let fullNameTest = fullNameRegex.test(sigupObj.fullname);
        let emailTest = emailRegex.test(sigupObj.email);
        let passwordTest = passwordRegex.test(sigupObj.password);
        let phoneTest = phoneRegex.test(sigupObj.phone);


        if (fullNameTest === false) {
            setRegExObj((prevState) => ({
                ...prevState,
                fullnameBorder: true,
                fullnameHelper: "enter correct name",
            }));

        }

        else if (fullNameTest === true) {
            setRegExObj((prevState) => ({
                ...prevState,
                fullnameBorder: false,
                fullnameHelper: "",
            }));
        }


        if (emailTest === false) {
            setRegExObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "enter correct name",
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
        else if (passwordTest === true) {
            setRegExObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }
        if (phoneTest === false) {
            setRegExObj((prevState) => ({
                ...prevState,
                phoneBorder: true,
                phoneHelper: "enter correct phone no",
            }));
        }
        else if (phoneTest === true) {
            setRegExObj((prevState) => ({
                ...prevState,
                phoneBorder: false,
                phoneHelper: "",
            })
            );
        }

        if (fullNameTest === true && emailTest === true && passwordTest === true && phoneTest === true)
            console.log(fullNameTest + " " + emailTest + passwordTest + phoneTest)
        signUp(sigupObj).then((response) => { console.log(response) }).catch((error) => { console.log(error) })
    }

    return (
        <div>

            <div className='outer-signup'>

                <div className='inner-signup'>

                    <div className='left-signup'>
                        <Button variant="text" size="larger" style={{ fontSize: 20, color: "black", size: "large" }} onClick={listeningToLogin} > LOGIN </Button>
                        <Button variant="text" size="larger" style={{ fontSize: 20, color: "black", size: "large" }} > SignUp </Button>
                    </div>
                    <form>
                        <div className='full-name'>
                            <label> Full Name </label>
                            <input type='text'
                                onChange={takeFullname}
                                error={regexObj.fullnameBorder}
                                helperText={regexObj.fullnameHelper} />
                        </div>

                        <div className='email-signup'>
                            <label> Email Id </label>
                            <input type='text' className='email-id-signup'
                                onChange={takeemail}
                                error={regexObj.emailBorder}
                                helperText={regexObj.emailHelper} />
                        </div>

                        <div className='password-signup'>
                            <label> Password </label>
                            <input type='text' className='password-id-signup'
                                onChange={takePassword}
                                error={regexObj.passwordBorder}
                                helperText={regexObj.passwordHelper}
                            />
                        </div>

                        <div className='mobile-signup'>
                            <label> Mobile phone </label>
                            <input type='text' className='mobile-id-signup'
                                onChange={takePhone}
                                error={regexObj.phoneBorder}
                                helperText={regexObj.phoneHelper}
                            />
                        </div>

                        <div className='button-signup'>
                            <Button variant="contained" style={{ backgroundColor: '#A03037', width: 200 }} onClick={submit} >SignUp</Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp