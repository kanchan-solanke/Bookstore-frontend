import './App.css';
import Cart from './Components/Cart/Cart';
import RouterComponent from './Router/Router';
// import BookDetails from './Components/BookDetails/BookDetails';
// import Counter from './Components/Counter/Counter';
// import Book from './Components/BookDashboard/Book';
import Dashboard from './Components/Dashboard/Dashboard';
import Customer from './Components/CustomerDetails/Customer';
import Popper from './Components/Popper/Popper';
import OrderSummary from './Components/OrderSummary/OrderSummary';
import OrderPlaces from './Components/OrderPlaces/OrderPlaces';
import CartOne from './Components/CartOne/CartOne';
// import Header from './Components/Header/Header';
// import SignUp from './Components/SignUp/SignUp';
// import  Login  from '../src/Components/Login/login';
// import Main from './Main/Main';
// import Image from './Components/Image/Image';
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Image/> */}
      {/* <SignUp /> */}
      {/* <Main/> */}
      {/* <Header/> */}
      {/* <Book/> */}
      {/* <Dashboard /> */}
      {/* <BookDetails/> */}
      {/* <Counter/> */}
      {/* <Cart /> */}
      {/* <CartOne/> */}
      {/* <Popper/> */}
      {/* <Customer/> */}
      <RouterComponent/>
      {/* <OrderSummary/> */}
      {/* <OrderPlaces/> */}
    </div>
  );
}

export default App;
