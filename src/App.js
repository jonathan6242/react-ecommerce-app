import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data"
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function removeFromCart(book) {
    setCart(cart.filter(item => item.id !== book.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map(item => (item.id === book.id) ? ({...item, quantity: quantity}) : item)
    )
  }

  // useEffect(() => {
  //   console.log(cart)
  // }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books books={books} />} />
          <Route path='/books/:id' element={(
            <BookInfo 
              books={books}
              addToCart={addToCart}
              cart={cart}
            />
          )} /> 
          <Route path='/cart' element={(
            <Cart 
              books={books}
              cart={cart}
              removeFromCart={removeFromCart}
              changeQuantity={changeQuantity}
            />
          )} />   
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
