import React, { useState } from 'react'
import './Header.css'
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CartOne from '../CartOne/CartOne';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { useNavigate } from 'react-router-dom';


function Header() {

    const [store, setStore] = useState(true)

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    function toggleBookDetailsTOCartOne() {
        setStore(!store)
    }

    const toggleDashboard = () => {
        navigate('/dashboard')
    }

    const toggleCart = () => {
        navigate('/cartone')
    }
    return (
        <div className='header_outer-box' >

            <div className="header_inner-box">



                <div className="header_box1">

                    <ImportContactsOutlinedIcon style={{ color: "white" }} />
                    <span onClick={toggleDashboard}>bookstore</span>

                </div>

                <div className='header_box2'>

                    <InputBase className='header_input-base' id='search-input' placeholder="Search ..." type='text' />

                </div>

                <div className="header_menu">

                    <div className="header_menu_profile">

                        <div className='profile'>
                            <PersonOutlineOutlinedIcon style={{ color: "white" }} onClick={handleClick} />

                        </div>
                        {<Popper id={id} open={open} anchorEl={anchorEl}>
                            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
                                {
                                    <ProfileDetails />

                                }
                            </Box>
                        </Popper>}
                    </div>

                    <div className="header_menu_cart">

                        <div className="header_menu_inner-div">



                            <ShoppingCartOutlinedIcon
                                sx={{ color: 'white', width: '24px', height: '18px', marginBottom: -0.75, justifyContent: "center", alignItems: "center" }}
                                onClick={toggleCart}

                            />



                            <span className='header_menu_label'>Cart</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Header