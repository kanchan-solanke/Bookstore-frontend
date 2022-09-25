import React from 'react'
import './BookDetails.css'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addCart, addWishlist, getCart } from '../../Services/dataService';
import Counter from '../Counter/Counter';


function BookDetails(props) {
    console.log('propy', props.bookdata.quantity)
    console.log("props", props.bookdata._id)

    const [bookCount, setBookCount] = React.useState([]);

    // Add book to cart

    const addBookToCart = () => {
        addCart(props.bookdata._id)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    // Add to wishlist

    const addBookToWishlist = () => {
        addWishlist(props.bookdata._id)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))

    }

    React.useEffect(() => {
        getCart()
            .then((response) => {
                console.log(response);

                let check = response.data.data.book.map((cart) => {
                    console.log("cart-id", cart.productId)
                    if (cart.productId == props.bookdata._id) {
                        console.log("count", cart.productId)
                        setBookCount(cart.quantity)
                        return cart;
                    }

                })

            })
            .catch((error) => {
                console.log(error)
            })
        console.log("book", bookCount)
    }, [])



    return (
        <div className="book_outer-box">

            <div className="book_inner-box">

                <div className="book_header">

                    <div className="book_route">Home / Book(01)</div>

                </div>

                <div className="book_main-container">

                    <div className="book_section1">

                        <div className="book_extra-img-box book_selected-img">

                            <img style={{ width: 50, padding: 2 }} src="/Images/Image 11.png" alt='image'></img>

                        </div>

                        <div className="book_extra-img-box">

                            <img style={{ width: 50, padding: 2, marginBottom: -18 }} src="/Images/Image 11.png"></img>

                        </div>

                    </div>
                    <div className="book_section2">

                        <div className="book_primary-img-box">

                            <img style={{ width: 250, height: 350 }} className="main-image-bookdetails" src="/Images/Image 11.png" alt='image'></img>

                        </div>

                        <div className="book_button-group">

                            {/* bookCount={bookCount} to send as props in counter component* */}

                            {(bookCount.length !== 0)
                                ?
                                <Counter bookCount={bookCount} bookdata={props.bookdata} />
                                :
                                <Button id='cart-btn' variant='contained' bookdata={props.bookdata} onClick={addBookToCart}>
                                    Add to bag
                                </Button>


                            }

                            <Button id='wishlist-btn' variant='contained' startIcon={<FavoriteIcon />} onClick={addBookToWishlist}>
                                Wishlist
                            </Button>

                        </div>

                    </div>

                    <div className="book_section3">

                        <div className="book_section3_info">

                            <div className="book_title">{props.bookdata.bookName}</div>

                            <div className="book_author">by {props.bookdata.author} </div>

                            <div className="book_review">

                                <div className="book_rating">

                                    <div id='book_rating-star'>4.5</div>

                                    <StarIcon sx={{ width: '12px', height: '12px', color: '#FFFFFF' }} />

                                </div>

                                <div className="book_rating-count"></div>

                            </div>

                            <div className="book-price">

                                <div className="book_price-discount">Rs. {props.bookdata.discountPrice} </div>

                                <div className="book_price-original">Rs.{props.bookdata.price} </div>
                            </div>

                        </div>

                        <div className="book_section3_details">

                            <div className="book_section3_details_heading">
                                Book Detail
                            </div>

                            <p></p>

                        </div>

                        <div className="book_section3_feedback">

                            <div className="book_section3_feedback_heading">Customer Feedback</div>

                            <div className="book_add-feedback">

                                <div className="book_rating_heading">Overall rating</div>

                                <Rating id='book_feedback-rating' name="feedback-rating"

                                />

                                <TextareaAutosize id='book_write-review' typeof='text' placeholder='Write Your Review'

                                />

                                <Button id='book_feedback-submit' variant='contained' >Submit</Button>

                            </div>

                            <div className="book_show-feedback">


                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default BookDetails
