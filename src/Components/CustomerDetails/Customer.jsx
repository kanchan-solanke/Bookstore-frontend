import { Button, Input } from '@mui/material'
import React, {useState} from 'react'
import './Customer.css'
import Textarea from '@mui/joy/Textarea';
import OrderSummary from '../OrderSummary/OrderSummary';
import TextField from '@mui/material/TextField';
import { addCustomer } from '../../Services/dataService';


function Customer(props) {
// to change place order to main
const [placeorders, setplaceorders] = useState(true);

    function togglePlaceOrdertoMains() {
        setplaceorders(!placeorders)
}

// const addCustomers = () => {
//     addCustomer()
//         .then((response) => console.log(response))
//         .catch((error) => console.log(error))
// }

    
    return (
        <div className='outer-details' id='outer-details'>

            <div className='customer-details'>
                {/* child */}
                <div className='details-customer'>
                    <h4> Customer Details</h4>
                </div>

                {/* child */}
                <div className='add-new-address'>
                    <Button variant='outlined' style={{ color: "brown",width:170,height:40 }}>Add New Address</Button>
                </div>

            </div>

            <div className='full-name' id='full-name'>
                {/* child */}

                <div className='full-name-details'>
                <label> Full Name </label>
                    <TextField id="outlined-basic-fullname" className='outlined-basic-fullname' size='small' variant="outlined" />

                                   </div>

                {/* child */}
                <div className='mobile-details'>
                    <label> Mobile Number </label>
                    <TextField id="outlined-basic-mobile" className='outlined-basic-mobile' size='small' variant="outlined" />
                </div>
            </div>

            <div className='address-details'>
                <label> Address </label>
                <TextField id="outlined-basic-address" className='outlined-basic-address' size='small' variant="outlined" />
            </div>

            <div className='city-details'>
                {/* child */}

                <div className='city-town'>
                    <label> City/Town </label>
                    <TextField id="outlined-basic-city" className='outlined-basic-city' size='small' variant="outlined" />
                </div>
                {/* child */}
                <div className='state'>
                    <label> State </label>
                    <TextField id="outlined-basic-state" className='outlined-basic-state' size='small' variant="outlined" />
                </div>

            </div>

            <div className='type-details'>
                {/* child */}
                <div className='home-bullet'>
                    <li> Home </li>
                </div>
                {/* child */}

                <div className='work-bullet'>
                    <li> Work </li>

                </div>
                {/* child */}
                <div className='other-bullet'>
                    <li> Other </li>

                </div>

            </div>

           
 
            <div className='continue-button-details' id='continue-button-details'>
                <Button variant='contained' onClick={props.toggleBoolOrder}> 
                Continue
                </Button>
            </div>
        


        </div>
    )
}

export default Customer
