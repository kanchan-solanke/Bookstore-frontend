import { Button } from '@mui/material'
import React, { useNavigate } from 'react'
import { Navigate } from 'react-router-dom';
import { getCart } from '../../Services/dataService';
import Cart from '../Cart/Cart';
import CartOne from '../CartOne/CartOne';
import CartToOrderPlace from '../CartToOrderPlace/CartToOrderPlace';
import OrderPlaces from '../OrderPlaces/OrderPlaces';
import Success from '../Success/Success';
import './OrderSummary.css'
function OrderSummary(props) {

    const [orderCount, setOrderCount] = React.useState([]);

    //order checkout to order places

   
    //get cart

    React.useEffect(() => {
        getCart()
            .then((response) => {
                console.log(response);

                let check = response.data.data.book.map((cart) => {
                    console.log("cart-id", cart.productId)
                    if (cart.productId == props.data._id) {
                        console.log("count", cart.productId)
                        setOrderCount(cart)
                        return cart;
                    }

                })
                console.log("check", check)

            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

   

    return (
        <div className='outer-order'>

            <div className="book_section-order">

                <div className="book_primary-img-box-order">

                    <img style={{ width: 120, height: 150 }} className="main-image-bookdetails-order"
                        src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Aad580fd0-abd0-4107-a45d-6be6d2fa445b&params=version%3A0&token=1663812987_da39a3ee_db4372c7de9d11c6a57b03c8535bb840c1f1bd97&api_key=CometServer1"></img>

                </div>

            </div>

            <div className="book_section-order" id='book_section-order'>

                <div className="book_section3_info-order">

                    <div className="book_title-order">{props.order.bookName}</div>

                    <div className="book_author-order">by {props.order.author} </div>



                    <div className="book-price-order">

                        {/* <div className="book_price-discount-order">Rs. {props.order.discountPrice} </div> */}

                        <div className="book_price-original-order">Rs.{props.order.price}  </div>
                    </div>
                </div>
            </div>

            <div className='checkout-order'>

                <Button variant='contained' style={{ width: 80, height: 30 }} onClick={props.toggleCheckout}> Checkout </Button>
            </div>

        </div>
    )
}

export default OrderSummary