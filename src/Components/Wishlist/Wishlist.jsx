import React from "react";
import './Wishlist.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';
import Header from "../Header/Header";

export const WishList = (props) => {

    return (
        <div className="outer-wishlist">

            <div className="wishlist-header">
                <Header />
            </div>

            <div className="wishlist-home">
                <label>
                    Home/My Wishlist
                </label>
            </div>

            <div className="wishlist-page">

                <div className="my-wishlist">

                </div>

                <div className="whole-wishlist">
                    <div className="book-wishlist">

                        <div className="book-image-wishlist">

                        </div>

                        <div className="title-wishlist">

                        </div>

                        <div className="author-wishlist">

                        </div>

                        <div className="price-wishlist">

                        </div>
                    </div>

                    <div className="remove-icon-wishlist">

                    </div>
                </div>
            </div>
        </div>

    )
}