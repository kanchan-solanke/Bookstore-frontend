import { Button } from '@mui/material'
import React from 'react'
import './ProfileDetails.css'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';

function ProfileDetails() {

    const navigate = useNavigate();

    const toggleWishlist = () => {
        navigate('/wishlist')
    }
   

    return (
       
<div className='main-profiledetails'>

        <div className='outer-profiledetails'>

            <div className='hello-profiledetails'>
                <h3> Hello Kanchan, </h3>
            </div>

            <div className='profile-profiledetails'>
                <div className='icon-profile-profiledetails'>
                    <PersonOutlineOutlinedIcon size='small' style={{ width: 13 }} />
                </div>
                <div className='label-profiledetails'>
                    <Button style={{ color: 'black' }} size='small'> Profile </Button>
                </div>
            </div>

            <div className='myorders-profiledetails'>
                <div className='icon-myorder-profiledetails'>
                    <ClassOutlinedIcon size='small' style={{ width: 13 }} />
                </div>
                <div className='myorder-label-profiledetails'>
                    <Button style={{ color: 'black' }} size='small'> My Orders </Button>
                </div>
            </div>

            <div className='mywishlist-profiledetails'>
                <div className='icon-mywishlist-profiledetails'>
                    <FavoriteBorderOutlinedIcon size='small' style={{ width: 13 }} />
                </div>
                <div className='mywishlist-label-profiledetails'>
                    <Button style={{ color: 'black' }} size='small' onClick={toggleWishlist}> My Wishlist </Button>
                </div>
            </div>

            <div className='logout-profiledetails'>
                <Button className='logout-profile' style={{ color: 'brown' }} variant='outlined'> Logout </Button>
            </div>

        </div>
        </div>

        
    )
}

export default ProfileDetails