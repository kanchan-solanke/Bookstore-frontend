import React from 'react'
import Login from '../Pages/Login/login'
import SignUp from '../Components/SignUp/SignUp'
import Image from '../Components/Image/Image'


function Main() {

    const [view, setView] = React.useState(true);

    const listenToLogin = () => {
        setView(true)
    }

    const listenToSignUp= () => {
        setView(false)
    }
    return (
        <div>
            <Image className="main-image" />
            {
                view ? <Login listenToSignUp={listenToSignUp} /> : <SignUp listenToLogin={listenToLogin} />
            }

            {/* <Login  className="login-image"/>
             <SignUp  className="signup-image"/> */}

        </div>
    )
}

export default Main