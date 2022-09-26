import React, { useNavigate } from 'react'
import './Book.css'
import StarIcon from '@mui/icons-material/Star';
// import Pagination from '@mui/material/Pagination';


function Book(props) {


    const listeningToBook = (data) => {
        props.listenToBook(data)

    }
    return (
       
        <div className="quickview_inner-box" onClick={() => listeningToBook(props.book)} >
          
            <div className="quickview_section1" >

                <img src="/Images/Image 11.png" alt='image'></img>


            </div>

            <div className="quickview_section2">

                <div className="quickview_book-details">

                    <div className="quickview_book-title">{props.book.bookName}</div>

                    <div className="quickview_book-author">by {props.book.author}</div>


                    <div className="quickview_book-review">

                        <div className="quickview_book-rating">

                            <div id='quickview_rating-star'>4.5</div>

                            <StarIcon sx={{ width: '12px', height: '12px', color: '#FFFFFF' }} />

                        </div>

                        <div className="quickview_rating-count">{props.book.rating}</div>

                    </div>

                    <div className="quickview_book-price">

                        <div className="quickview_price-discount">Rs.{props.book.discountPrice} </div>

                        <div className="quickview_price-original">Rs.{props.book.price}</div>
                    </div>

                </div>

            </div>

        </div>



    )

}
export default Book