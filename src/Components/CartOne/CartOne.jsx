import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../../Services/dataService'
import Book from '../BookDashboard/Book'
import Cart from '../Cart/Cart'
import Customer from '../CustomerDetails/Customer'
import Header from '../Header/Header'
import OrderSummary from '../OrderSummary/OrderSummary'
import './CartOne.css'

function CartOne(props) {
    const [datacart, setDataCart] = React.useState([])
    console.log("carts  details", datacart)

    // to change state address to customer
    const [myBool, setmyBool] = useState(false);

    //to change order to order summary
    const [myBoolOrder, setmyBoolOrder] = useState(false);

    // useState for order summary 
    const [ordersummary, setOrderSummary] = React.useState([])

    const navigate = useNavigate();

    const toggleCheckout = () => {
        navigate('/success')
    }
    const toggleBool = () => {
        setmyBool(!myBool)

    }

    const toggleBoolOrder = () => {
        setmyBoolOrder(!myBoolOrder)
    }

    React.useEffect(() => {
        getCart()
            .then(response => {
                console.log(response.data.data)
                setDataCart(response.data.data.book)
                setOrderSummary(response.data.data.book)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <div className='header-cartone'>
            <Header />
            <div className='cartone-all'>

                <div>
              <Cart datacart={<Book/>} toggleBool={toggleBool} />
                </div>
            
                {
                    myBool ?
                        <Customer toggleBoolOrder={toggleBoolOrder} />
                        :
                        <div className='address-cart'>
                            <Button style={{ color: "black" }} >
                                Address details
                            </Button>
                        </div>
                }


                {/* Main  */}
                {
                    myBoolOrder ?
                        ordersummary.length > 0 &&
                        ordersummary.map((order) => (
                            <OrderSummary order={order} toggleCheckout={toggleCheckout} />
                        ))
                        :
                        <div className='order-cart'>
                            <Button style={{ color: "black" }}>
                                Order Summary
                            </Button>
                        </div>

                }

            </div>
        </div>

    )
}

export default CartOne
