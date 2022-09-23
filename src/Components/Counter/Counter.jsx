import React from 'react'
import './Counter.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { updateCart } from '../../Services/dataService';

function Counter(props) {

  const handleDecrement = () => {
    let decrement = { quantity: props.bookCount - 1 }
    
    updateCart(decrement, props.bookdata._id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  const handleIncrement = () => {
    let increment = { quantity: props.bookCount + 1 }
   
    updateCart(increment, props.bookdata._id)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  }

  return (
    <div>
      <div className='book_update-count'>

        <div className="decrement-count" style={{ width:30, height:30}}>

          <RemoveIcon onClick={handleDecrement}/>

        </div>

        <div className="display-count" style={{ width:50, height:30}}>{props.bookCount}</div>

        <div className="increment-count" style={{ width:30, height:30}} >

          <AddIcon onClick={handleIncrement} />

        </div>

      </div>

    </div>
  )
}

export default Counter
