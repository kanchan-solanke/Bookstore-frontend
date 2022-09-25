import React, { useState } from 'react'
import './Cart.css'
import Button from '@mui/material/Button';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { getCart, RemoveCart, updateCart } from '../../Services/dataService';



function Cart(props) {

  const [cartCount, setCartCount] = React.useState([]);
  const [bookId, setBookId] = React.useState([])

  const [arraycart, setArray] = React.useState([])
  console.log('arraycart', arraycart)

  //get cart

  const getCartDetails = () => {
    getCart()
      .then((response) => {
        console.log(response);
        setArray(response.data.data.book)
      }).catch((error) => {
        console.log(error);
      })
  }

  // Remove Cart

  const RemoveCartDetails = () => {
    RemoveCart()
      .then((response) => {
        console.log(response);

        let check = response.data.data.book.map((cart) => {
          console.log("cart-id", cart.productId)
          if (cart.productId == props.data._id) {
            console.log("count", cart.productId)
            return cart;
          }

        })
        console.log("check", check)

      })
      .catch((error) => {
        console.log(error);
      })
  }


  const getAllCartItems = (data) => {
    getCart()
      .then((response) => {
        console.log(response);

        let check = response.data.data.book.map((cart) => {
          console.log("cart-id", cart.productId)
          if (cart.productId == data) {
            setCartCount(cart.quantity)
            setBookId(props.book._id)
            return data;
          }
          else {
            setCartCount(0)
            return data;
          }
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }

  const subQuantity = (event) => {
    getAllCartItems(event.target.id)
    let data = { quantity: props.bookCount - 1 }
    updateCart(data, event.target.id)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const AddQuantity = (event) => {
    getAllCartItems(event.target.id)
    let data = { quantity: props.bookCount + 1 }
    updateCart(data, event.target.id)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  React.useEffect(() => {
    getCartDetails()
  }, [])



  return (
    <div className='main-cart'>

      <div className='home-cart'>
        <label> Home/My cart</label>
      </div>

      <div className='outer-cart'>

        {/* Main  */}

        <div className='book-cart'>

          {/* Child  */}
          <div className='my-cart' id='my-cart'>
            {/* Super Child  */}

            <div className='sub-my-cart' id='sub-my-cart'>
              <label> My cart ({arraycart.length})</label>

            </div>

            {/* Super Child  */}

            <div className='location-cart' id='location-cart' style={{ width: 300, marginLeft: 50, marginTop: 30 }}>

              <div className='location-symbol' id='location-symbol' style={{ color: "brown" }}>
                <LocationOnOutlinedIcon />
              </div>

              <div className='use-current' style={{ width: 300, marginLeft: -50 }}>
                <h4 style={{ color: "black" }}><span> Use Current Location </span> </h4>
              </div>

              <div className='arrow-cart'>
                <ArrowDropDownOutlinedIcon style={{ color: "gray" }} />
              </div>

            </div>

          </div>

          {/* Child  */}

          {
            arraycart.length > 0 &&
            arraycart.map((arraycarts) => (

              <div className='bookdetails-cart'>

                {/* Super Child  */}
                <div className='book-image-cart' id='book-image-cart'>
                  <img style={{ width: 100, height: 150, margin: 5 }} src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A10fa5960-ae05-4a11-9365-133f07ce7183&params=version%3A0&token=1663608440_da39a3ee_6242d7adf3a224bf5b3fc05e2cf7ff50e220a909&api_key=CometServer1"></img>

                </div>
                <div className='main-image-cart'>

                  {/* Super Child  */}
                  <div id='title-cart' className='title-cart'>
                    {arraycarts.bookName}
                  </div>
                  {/* Super Child  */}
                  <div className='author-cart' id='author-cart'>
                    by {arraycarts.author}

                  </div>

                  {/* Super Child  */}
                  <div className='discount-price-cart' id='discount-price-cart'>
                    {/* Super super Child  */}

                    <div id='discount-cart'>
                      Rs.100
                    </div>

                    {/* Super super Child  */}
                    <div className='price-cart'>
                      {arraycarts.price}

                    </div>

                  </div>


                  {/* Super Child  */}
                  <div className='incre-decre-cart'>
                    {/* Super super Child  */}
                    <div id='incre-decre-cart-icon-sub'>

                      <RemoveCircleOutlineIcon onClick={subQuantity} />
                    </div>
                    <div id='incre-decre-cart-icon-box'>
                      <div className="quantityBox">{arraycarts.quantity}</div>

                    </div>
                    <div id='incre-decre-cart-icon-add'>

                      <AddCircleOutlineOutlinedIcon onClick={AddQuantity} />
                    </div>

                    {/* Super super Child  */}
                    <div id='remove-cart-buuton'>
                      <Button style={{ color: "black" }} onClick={RemoveCartDetails}> Remove </Button>
                    </div>
                  </div>
                </div>

              </div>


            )
            )
          }

          <div className='button-cart'>
            <Button variant="contained" style={{ height: 30 }} onClick={props.toggleBool}>
              Place Order
            </Button>

          </div>

        </div>

        {/* Main  */}

      </div>

    </div >
  )
}

export default Cart

{/* here click on place order so address bar should be expand so set onclick method on place order button and give therir current
        status value in address bar
        
        we set value gib=ve onclick on place rder and mybool to address details to change

        same we have to click on continue button and order summary should be expand so i used props give continue button
        and myboolorder to order summary

        */}

{/* when use conditional rendering
    
    step 1 : define useState set by default true or false
const [myBool, setmyBool] = useState(true);
  function toggleBool() {
    setmyBool(!myBool)
  }

    step 2 : Define function and set it true or false
    function toggleBool() {
    setmyBool(!myBool)
  }

  step 3: onclick this step 2 function
    
    
    */}
