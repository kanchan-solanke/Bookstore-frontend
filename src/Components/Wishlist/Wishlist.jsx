import React from "react";
import './Wishlist.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';
import Divider from '@mui/material/Divider'
import Header from "../Header/Header";

export const WishList = (props) => {

    const[wishlistArray,setWishListArray] = React.useState([])

    // const getWishList = () =>{
    //     ().then((res) =>{
    //         console.log(res);
    //         setWishListArray(res.data.data.books)
    //     }).catch((error) =>{
    //         console.log(error);
    //     })
    // }

    // React.useEffect(() =>{
    //     getWishList()
    // },[])

  

    return (
    
    <div className="wishlistwholepage">
        <Header/>
    <div className="wishListPage">

        <div className="wishListHeader">Home/ My Wishlist</div>
        <div className="wishListContent">
            
            <div className="contentHeader">My Wishlist </div>
            
                <div className="Wcartsection1">
                    <div className="Wbooksection"><img style={{width:'50%'}}  id="bookImg" /></div>
                    <div className="WbookContent">
                        <div className="WbookContent1">
                            <div className="WbookHeading"></div>
                            <div className="WbookAuthor">by </div>
                            <div className="WbookPrice">Rs.</div>
                            <Divider style={{color: 'black',width:'64.9vw',marginTop:'10%',marginLeft:'-67%'}}/>                    
                        </div>                      
                        <div className="Wremove">
                        <DeleteForeverIcon />
                        </div> 
                    </div>
                </div>)
            
        </div>
    </div>
    </div>)
}