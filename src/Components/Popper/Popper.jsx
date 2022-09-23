import React from 'react'
import Main from '../../Main/Main';
import Box from '@mui/material/Box';
import CartOne from '../CartOne/CartOne';

function Popper() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <button aria-describedby={id} type="button" onClick={handleClick}>
                Toggle Popper
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    <CartOne/>
                </Box>
            </Popper>
        </div>


    )
}

export default Popper
