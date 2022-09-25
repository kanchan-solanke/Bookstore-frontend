import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header'
import './Success.css'

function Success() {
    const navigate = useNavigate();

    return (

        <div className='orderwholepage'>

            <Header />

            <div className='orderplacepage'>

                <div className='orderImage'>
                    <img  src="/Images/success1.png.jpg" className="orderimage" />
                    <h3>Order Placed Successfully</h3>
                    <img  src="/Images/success2.jpg" className="orderimage" />

                </div>

                <div className='ordermessage'>
                    hurray!!! your order is confirmed<br />
                    the order id is #123456 save the order id for<br />
                    further communication..
                </div>

                <div className='contactdetails'>

                    <div className='contactheader'>
                        <div className='contactemail'>Email us</div>
                        <div className='contactNumber'>Contact us</div>
                        <div className='contactAddress'>Address</div>
                    </div>

                    <div className='contactcontent'>
                        <div className='emailcontent'>admin@bookstore.com</div>
                        <div className='numbercontent'>+91-8163475881</div>
                        <div className='addresscontent'>
                            42,14th Main, 15th Cross, Sector 4,opp to BDA,
                            complex, near Kumarakom restaurant, HSR Layout,
                            Bangalore 560034
                        </div>

                    </div>
                </div>

                <div className='continue-success'>
                    <Button variant='contained' className='continue-shopping-success' onClick={() => navigate('/Dashboard')}> Continue Shopping </Button>
                </div>
            </div>
        </div>
    )
}

export default Success