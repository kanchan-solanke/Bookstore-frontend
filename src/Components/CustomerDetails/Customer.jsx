import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import './Customer.css'
import TextField from '@mui/material/TextField';
import { addCustomer } from '../../Services/dataService';
const nameRegex = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/;
const mobileRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
const fullAddressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
const cityRegex = /^[A-Z][a-z]{2,}$/;
const stateRegex = /^[A-Z][a-z]{2,}$/;

function Customer(props) {

    const [customerDetails, setCustomerDetails] = React.useState({

        name: '', phoneNumber: '', fullAddress: '', city: '', state: '', Type: ''
    })

    const [regexObj, setRegexObj] = React.useState({

        nameError: false, nameHelperText: '',
        mobileError: false, mobileHelperText: '',
        fullAddressError: false, fullAddressHelperText: '',
        cityError: false, cityHelperText: '',
        stateError: false, stateHelperText: ''
    })

    const takeFullName = (event) => {
        setCustomerDetails({ ...customerDetails, name: event.target.value })
    }

    const takeMobile = (event) => {
        setCustomerDetails({ ...customerDetails, phoneNumber: event.target.value })
    }

    const takeAddress = (event) => {
        setCustomerDetails({ ...customerDetails, fullAddress: event.target.value })
    }

    const takeCity = (event) => {
        setCustomerDetails({ ...customerDetails, city: event.target.value })
    }

    const takeState = (event) => {
        setCustomerDetails({ ...customerDetails, state: event.target.value })
    }

    const takeType = (event) => {
        setCustomerDetails({ ...customerDetails, Type: event.target.value })
    }

    const customerDetailsValidation = () => {

        let fullNameTest = nameRegex.test(customerDetails.name)
        let phoneNumberTest = mobileRegex.test(customerDetails.phoneNumber)
        let addressTest = fullAddressRegex.test(customerDetails.fullAddress)
        let cityTest = cityRegex.test(customerDetails.city)
        let stateTest = stateRegex.test(customerDetails.state)

        if (fullNameTest == true) {
            setRegexObj(prevState => ({ ...prevState, nameError: false, nameHelperText: '' }))
        }
        else if (fullNameTest == false) {
            setRegexObj(prevState => ({ ...prevState, nameError: true, nameHelperText: 'Enter Valid Name' }))
        }
        if (phoneNumberTest == true) {
            setRegexObj(prevState => ({ ...prevState, mobileError: false, mobileHelperText: '' }))
        }
        else if (phoneNumberTest == false) {
            setRegexObj(prevState => ({ ...prevState, mobileError: true, mobileHelperText: 'Enter valid MobileNumber' }))
        }

        if (addressTest == true) {
            setRegexObj(prevState => ({ ...prevState, fullAddressError: false, fullAddressHelperText: '' }))
        }
        else if (addressTest == false) {
            setRegexObj(prevState => ({ ...prevState, fullAddressError: true, fullAddressHelperText: 'Enter Valid Address' }))
        }
        if (cityTest == true) {
            setRegexObj(prevState => ({ ...prevState, cityError: false, cityHelperText: '' }))
        }
        else if (cityTest == false) {
            setRegexObj(prevState => ({ ...prevState, cityError: true, cityHelperText: 'Enter Valid City Name' }))
        }
        if (stateTest == true) {
            setRegexObj(prevState => ({ ...prevState, stateError: false, stateHelperText: '' }))
        }
        else if (stateTest == false) {
            setRegexObj(prevState => ({ ...prevState, stateError: true, stateHelperText: 'Enter Valid State Name' }))
        }
        if (fullNameTest === true && phoneNumberTest === true && addressTest === true && cityTest === true && stateTest === true) {
            addCustomer().then((response) => {
                console.log(response);
                props.toggleCheckout()
            }).catch((error) => {
                console.log(error);
            })
        }
    }

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
                <Button variant='outlined' style={{ color: "brown", width: 170, height: 40 }}>Add New Address</Button>
            </div>

        </div>

        <div className='full-name' id='full-name'>
            {/* child */}

            <div className='full-name-details'>
                <TextField
                    id="outlined-basic-fullname"
                    className='outlined-basic-fullname'
                    label="Full Name"
                    size='small'
                    variant="outlined"
                    onChange={takeFullName}
                    error={regexObj.nameError}
                    helperText={regexObj.nameHelperText}
                />

            </div>

            {/* child */}
            <div className='mobile-details'>
                <TextField
                    id="outlined-basic-mobile"
                    className='outlined-basic-mobile'
                    size='small'
                    label="Mobile"
                    variant="outlined"
                    onChange={takeMobile}
                    error={regexObj.mobileError}
                    helperText={regexObj.mobileHelperText}
                />
            </div>

        </div>

        <div className='address-details'>
            <TextField
                id="outlined-basic-address"
                style={{ margin: 1 }}
                size='small'
                className='outlined-basic-address'
                label="Address"
                variant="outlined"
                onChange={takeAddress}
                error={regexObj.fullAddressError}
                helperText={regexObj.fullAddressHelperText}
            />
        </div>

        <div className='city-details'>
            {/* child */}

            <div className='city-town'>
                <TextField
                    id="outlined-basic-city"
                    className='outlined-basic-city'
                    size='small'
                    label="City/Town"
                    variant="outlined"
                    onChange={takeCity}
                    error={regexObj.cityError}
                    helperText={regexObj.cityHelperText}
                />
            </div>
            {/* child */}
            <div className='state'>
                <TextField
                    id="outlined-basic-state"
                    className='outlined-basic-state'
                    size='small'
                    label="State"
                    variant="outlined"
                    onChange={takeState}
                    error={regexObj.stateError}
                    helperText={regexObj.stateHelperText}
                />
            </div>

        </div>

        <div className='type-details' onChange={takeType}>
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
           
        {
                    props.toggleBoolOrder? 
            <Button variant='contained' onClick={customerDetailsValidation}>
                Continue
            </Button> :
props.toggleCheckout}
        </div>
</div>
)
}

export default Customer
