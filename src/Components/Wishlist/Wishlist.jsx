import React from "react";
import './Wishlist.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';
import Header from "../Header/Header";
import { getCart } from "../../Services/dataService";

export const WishList = (props) => {
    const [arraycart, setArray] = React.useState([])
    console.log('arraycart', arraycart)

    const getCartDetails = () => {
        getCart()
          .then((response) => {
            console.log(response);
            setArray(response.data.data.book)
          }).catch((error) => {
            console.log(error);
          })
      }


      React.useEffect(() => {
        getCartDetails()
      }, [])   
      
      return (
        <div className='main-cart-wishlist'>

        <div className='home-cart-wishlist'>
          <label> Home/My cart</label>
        </div>

        <div className='outer-cart-wishlist'>

{/* Main  */}

<div className='book-cart-wishlist'>

  {/* Child  */}
  <div className='my-cart-wishlist' id='my-cart-wishlist'>
    {/* Super Child  */}

    <div className='sub-my-cart-wishlist' id='sub-my-cart-wishlist'>
      <label> My cart ({arraycart.length})</label>

    </div>

    {
            arraycart.length > 0 &&
            arraycart.map((arraycarts) => (

              <div className='bookdetails-cart-wishlist'>

                {/* Super Child  */}
                <div className='book-image-cart-wishlist' id='book-image-cart-wishlist'>
                  <img style={{ width: 100, height: 150, margin: 5 }} src="/Images/Image 11.png"></img>

                </div>
                <div className='main-image-cart-wishlist'>

                  {/* Super Child  */}
                  <div id='title-cart' className='title-cart-wishlist'>
                    {arraycarts.bookName}
                  </div>
                  {/* Super Child  */}
                  <div className='author-cart' id='author-cart-wishlist'>
                    by {arraycarts.author}

                  </div>

                  {/* Super Child  */}
                  <div className='discount-price-cart-wishlist' id='discount-price-cart-wishlist'>
                    {/* Super super Child  */}

                    <div id='discount-cart-wishlist'>
                      Rs.100
                    </div>

                    {/* Super super Child  */}
                    <div className='price-cart-wishlist'>
                      {arraycarts.price}

                    </div>

                  </div>


                  {/* Super Child  */}
                 

                </div>

              </div>


            )
            )
          }

    </div>
    </div>
    </div>

        </div>

  
    )
}