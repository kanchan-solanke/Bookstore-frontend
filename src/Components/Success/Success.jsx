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
                    <img src='https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fjpeg&attachment_token=AOkZXXQpZiem6vxTmsgUFMkum9nI20LGg2idDt6CPr20v%2BE%2FAgm%2ByUmg2lnFRFren8Ze11klv3OeJoWUsqGahDkK1J8UWDx7f9P2ff83jXcs0S5MBYU5p%2FGPvWdXVna09U8oJXafr2BhmNZpHxBe0p4gwu7VF6JGxYHYCmkfnItvADEAvaN8GQNFhjKeElXwubWqeVDk3DxKPMhqZKZjNvHPIO5bIJNd%2Fo7lbaDkvo%2BlopTMFWnRJ7LtUenV7y5S%2F1fiiAwwCs06TbDcDbsnXKe6T5%2BzmDTwd6OHIN3j9xYroSDfW57IKGPthT1hgpVm38N5PkAcK%2FeCgRIY0G3xR8b%2BXrPdQ67MR%2FPKBQ2%2F7%2FNIa9lJc5dzq5YZjKK1vdBU0mjxiF2YZRxJ%2B60FhTBM33JTfB0z0GgwReAqfn4737evPolZqvYWkYGXAClgtuHUP0lLTvxdyneI4duBYf%2FsO0xAr%2Bj%2F%2Be7aGEBiIc7rUGZULXdHNRioocws%2BuABUQI8GQ%3D%3D&sz=w512' className="orderimage" />
                    <h3>Order Placed Successfully</h3>

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